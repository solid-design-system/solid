# Release Guide

This guide outlines the steps to perform a standard release from the main branch and a feature branch release. Please follow the instructions below:

## Standard Release from Main Branch

1. On push to the main branch, the release workflow is triggered. This workflow integrates with semantic release.
2. Once the release workflow is completed, it triggers the 'sync-to-azure' workflow. This workflow ensures synchronization between the main branch and the main branch in the Azure DevOps repository.
3. On Azure, the 'deploy-to-cdn.yml' pipeline is automatically triggered. This pipeline deploys the code and Storybook to the SDS CDN.
   - Note: Only if the last commit is coming from the semantic-release-bot, the pipeline proceeds. This step ensures that a new version is deployed only when there is a new release. Otherwise, it would overwrite the current version with new code.
   - For the main branch, the pipeline utilizes the 'push-to-storage-main.template.yml' template to deploy the code to the CDN. This template deploys the code into different folders to provide wildcard URLs:
     1. It deploys into a new version folder (current version from package.json).
     2. It deploys into a latest version folder called 'x.x.x'.
     3. It deploys into a patch wildcard folder called 'x.x.\*'.
     4. It deploys into a minor wildcard folder called 'x._._'.
   - All the respective CDN folders are purged from the old code.

## Feature Branch Release

1. To deploy a feature branch, trigger the 'sync-to-azure' workflow manually.
2. On Azure, the 'deploy-to-cdn.yml' pipeline is automatically triggered, following a similar procedure as described above. The only difference is that it uses the 'push-to-storage-feature.template.yml' template and deploys the code into a folder with the name of the branch. The branch name is manipulated to replace all '/' with '\_' to ensure a valid folder name.

Please follow these steps to ensure a successful release from both the main branch and feature branches.
