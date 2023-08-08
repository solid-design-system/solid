# Release Guide

This guide outlines the steps to perform a standard release from the main branch and a feature branch release. Please follow the instructions below:

> Note: To avoid cluttering the commit history and losing track of the GitHub and Azure DevOps context, we have relocated the deployment pipelines to the [Azure DevOps Pipeline Repository](https://dev.azure.com/Union-Investment/SolidDesignSystem/_git/SolidDesignSystem-Pipelines?path=/&version=GBmain). The release and deployment process remains unchanged as outlined below.

## Standard Release from Main Branch

1. On push to the main branch, the release workflow is triggered. This workflow integrates with semantic release.
2. Once the release workflow is completed, it triggers the 'sync-to-azure' workflow. This workflow ensures synchronization between the main branch on GitHub and the main branch in the Azure DevOps repository.
3. On Azure, the 'deploy-to-cdn.yml' pipeline is automatically triggered. This pipeline deploys the code and Storybook to the SDS CDN.

> Note: The pipeline checks the last commit and sets one of 3 possible deployment type. This step ensures that a new version is deployed only when there is a new release and only the docs are deployed if there are docs-only changes. Otherwise, it would overwrite the current version with new code. The 3 types are `code`: This is the default deployment type and deploys the code and Storybook to the CDN, `docs`: This type is set when the last commit message starts with the word 'docs:' and deploys only the Storybook to the CDN and `none`: This type is set when the last commit message starts with anything else and skips the deployment to the CDN.

4. For the main branch, the pipeline utilizes the 'push-to-storage-main.template.yml' template to deploy the code to the CDN. This template deploys the code into different folders to provide wildcard URLs:

- It deploys into a new version folder (current version from package.json).
- It deploys into a latest version / patch-wildcard folder called `x.x.x`
- It deploys into a patch wildcard folder called `[1st-version-number].x.x`
- It deploys into a minor wildcard folder called `[1st-version-number].[2nd-version-number].x`

5. All the respective CDN folders are purged from the old code.

## Feature Branch Release

1. To deploy a feature branch, trigger the 'sync-to-azure' workflow manually.
2. On Azure, the 'deploy-to-cdn.yml' pipeline is automatically triggered, following a similar procedure as described above. The only difference is that it uses the 'push-to-storage-feature.template.yml' template and deploys the code into a folder with the name of the branch. The branch name is manipulated to replace all '/' with '\_' to ensure a valid folder name.

> Note: There is no differentiation between deployment type for feature branches. Therewith the type `code` will be used for all feature branch deployments and updates.

See [CONTRIBUTING.md](../../../CONTRIBUTING.md#working-with-feature-branches) for more information on how to use a contributed feature with a feature branch deployment.

## Docs Release

To perform a documentation-only release, a _*standard*_ release has to be performed. The pipelines will automatically recognize (by checking the commit message) that only documentation has been updated and therefore only deploy the Storybook folder to the current version folder on the CDN.

Please follow these steps to ensure a successful release from both the main branch and feature branches.
