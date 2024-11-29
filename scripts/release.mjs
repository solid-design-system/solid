import { execSync } from 'child_process';
import { Octokit } from '@octokit/rest';
import fs from 'fs';
import path from 'path';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const NPM_TOKEN = process.env.NPM_TOKEN;

const octokit = new Octokit({ auth: GITHUB_TOKEN });

async function main() {
  try {
    console.log('Generating Changeset status...');
    execSync('pnpm changeset status --output changeset-status.json', { stdio: 'inherit' });

    if (!fs.existsSync('changeset-status.json')) {
      console.log('No changeset-status.json found. Exiting.');
      return;
    }

    const status = JSON.parse(fs.readFileSync('changeset-status.json', 'utf-8'));
    if (status.releases.length === 0) {
      console.log('No packages to release. Skipping further steps.');
      return;
    }

    console.log('Applying Changesets...');
    execSync('pnpm changeset version', { stdio: 'inherit' });

    console.log('Extracting updated package names and versions...');
    const updatedPackages = [];
    const updatedVersions = [];

    const changedFiles = execSync('git diff --name-only', { encoding: 'utf-8' })
      .split('\n')
      .filter(file => file.includes('package.json'));

    changedFiles.forEach(file => {
      const packageJsonPath = path.resolve(file);
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

      if (packageJson.name) {
        updatedPackages.push(packageJson.name);
      }

      if (packageJson.version) {
        updatedVersions.push(packageJson.version);
      }
    });

    const sortedPackages = updatedPackages
      .map((name, index) => ({ name: name.split('/')[1], version: updatedVersions[index] }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const packagesWithVersions = sortedPackages.map(pkg => `${pkg.name}: ${pkg.version}`).join(', ');

    console.log('Build packages...');
    execSync('pnpm --recursive --if-present postversion');

    console.log('Committing changes...');
    execSync('git config user.name "github-actions[bot]"');
    execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');

    const commitMessage = packagesWithVersions
      ? `chore(release): ${packagesWithVersions} [skip ci]`
      : 'chore(release): applied changesets [skip ci]';

    execSync('git add .');
    execSync(`git commit -m "${commitMessage}" || echo "No changes to commit"`, { stdio: 'inherit' });

    console.log('Pushing changes to main...');
    execSync('git push origin main', { stdio: 'inherit' });

    console.log('Publishing to NPM...');
    execSync(`pnpm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`, { stdio: 'inherit' });
    execSync('pnpm changeset publish -r', { stdio: 'inherit' });

    console.log('Pushing tags...');
    execSync('git push --tags', { stdio: 'inherit' });

    console.log('Generating Release Notes...');
    const updatedChangelogs = execSync('git diff --name-only HEAD~1 HEAD | grep CHANGELOG.md || true', {
      encoding: 'utf-8'
    }).trim();

    console.log('updatedChangelogs:', updatedChangelogs);

    if (!updatedChangelogs) {
      console.log('No updated changelogs found. Skipping release notes creation.');
      return;
    }

    const releaseNotesByPackage = updatedChangelogs.split('\n').map(changelog => {
      const packageName = changelog.split('/')[1];
      const notes = `Please refer to [CHANGELOG](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-${packageName}-changelog--docs) for details.`;

      console.log('packageName:', packageName);
      return { packageName, notes };
    });

    console.log('Creating GitHub Releases...');
    const tags = execSync('git tag --points-at HEAD', { encoding: 'utf-8' }).trim().split('\n');
    for (const tag of tags) {
      const releaseNotes = releaseNotesByPackage
        .filter(pkg => tag.includes(pkg.packageName))
        .map(pkg => pkg.notes)
        .join('\n');

      if (!releaseNotes) {
        console.log(`No release notes found for tag ${tag}. Skipping.`);
        continue;
      }

      console.log(`Creating release for ${tag} with notes:`);
      console.log(releaseNotes);

      await octokit.rest.repos.createRelease({
        owner: 'solid-design-system',
        repo: 'solid',
        tag_name: tag,
        name: tag,
        body: releaseNotes
      });
    }

    console.log('All done!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
