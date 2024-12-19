import { execSync } from 'child_process';
import { Octokit } from '@octokit/rest';
import fs from 'fs';

const GH_TOKEN = process.env.GH_TOKEN;
const NPM_TOKEN = process.env.NPM_TOKEN;

const octokit = new Octokit({ auth: GH_TOKEN });

async function main() {
  try {
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git checkout next', { stdio: 'inherit' });

    if (
      !fs.existsSync('./.changeset/pre.json') ||
      JSON.parse(fs.readFileSync('./.changeset/pre.json', 'utf-8')).mode !== 'pre'
    ) {
      console.log('Not in pre-mode. Will be entered now.');
      execSync('pnpm changeset pre enter next', { stdio: 'inherit' });
    }

    console.log(
      'Generate empty changeset to make changeset happy if version changed in comparison to main but no changeset available...'
    );
    execSync('pnpm changeset add --empty', { stdio: 'inherit' });

    console.log('Generating changeset-status.json...');
    execSync('pnpm changeset status --output changeset-status.json', { stdio: 'inherit' });

    if (!fs.existsSync('changeset-status.json')) {
      console.log('No changeset-status.json found. Exiting.');
      return;
    }

    const status = JSON.parse(fs.readFileSync('changeset-status.json', 'utf-8'));
    if (status?.releases?.length === 0) {
      console.log('No packages to release. Skipping further steps.');
      return;
    }

    console.log('Extracting updated package names and versions from changeset-status.json...');
    const sortedPackages = status.releases
      .map(release => ({
        name: release.name.split('/')[1], // Extract package name after the scope
        version: release.newVersion
      }))
      .sort((a, b) => a.name.localeCompare(b.name));

    const packagesWithVersions = sortedPackages.map(pkg => `${pkg.name}@${pkg.version}`).join(', ');

    console.log('Removing changeset-status.json...');
    fs.unlinkSync('changeset-status.json');

    console.log('Applying Changesets...');
    execSync(`GITHUB_TOKEN=${GH_TOKEN} pnpm changeset version`, { stdio: 'inherit' });

    console.log('Build packages...');
    execSync('pnpm --recursive --if-present postversion');

    console.log('Committing changes...');
    execSync('git config user.name "github-actions[bot]"');
    execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');

    // It is important to remove [skip actions] here, as otherwise we can't merge on main.
    const commitMessage = `chore(release-next): ${packagesWithVersions}`;

    execSync('git add .');
    execSync(`git commit -m "${commitMessage}" || echo "No changes to commit"`, { stdio: 'inherit' });

    console.log('Set origin with PAT...');
    execSync(`git remote set-url origin https://${GH_TOKEN}@github.com/solid-design-system/solid.git`);

    console.log('Pushing changes to next...');
    execSync('git push origin next', { stdio: 'inherit' });

    console.log('Publishing to NPM...');
    execSync(`pnpm config set '//registry.npmjs.org/:_authToken' "${NPM_TOKEN}"`, { stdio: 'inherit' });
    execSync(`NPM_TOKEN=${NPM_TOKEN} pnpm changeset publish -r`, { stdio: 'inherit' });

    console.log('Pushing tags...');
    execSync('git push --tags', { stdio: 'inherit' });

    console.log('Generating Release Notes...');
    const releaseNotesByPackage = sortedPackages.map(pkg => {
      const notes = `Please refer to [CHANGELOG](https://solid-design-system.fe.union-investment.de/docs/?path=/docs/packages-${pkg.name}-changelog--docs) for details.`;
      return { packageName: pkg.name, notes };
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
