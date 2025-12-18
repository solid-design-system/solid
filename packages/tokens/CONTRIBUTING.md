# Contributing

## For Designers (Figma)

Create new variables in Variables.

## For Developers (Code)

### Updating/Creating Themes

1. Create a token in Figma with the permissions "Design systems -> Read Variables". This has to be done by someone with a Union Investment account and be shared with the team.
2. Extract the Figma ID from the URL – if you need a specific branch, pick up the URL part after `/branch/`, otherwise the value after `/design/`
3. Run `cd packages/tokens && FIGMA_FILE_ID=[Set file id here, which is unique for every branch] FIGMA_TOKEN=[use the created token here] pnpm fetch:figma`
4. Enjoy.
