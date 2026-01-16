# Contributing

## For Designers (Figma)

Create new variables in Variables.

## For Developers (Code)

### Updating/Creating Themes

1. Create a token in Figma with the permissions "Design systems -> Read Variables". This has to be done by someone with a Union Investment account and be shared with the team.
2. Extract the Figma ID from the URL – if you need a specific branch, pick up the URL part after `/branch/`, otherwise the value after `/design/`
3. Create a `.env` file in the `packages/tokens` directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
4. Add your Figma credentials to the `.env` file:
   ```
   FIGMA_TOKEN=your_figma_token_here
   FIGMA_FILE_ID=your_file_id_here
   ```
5. Run the fetch command:
   ```bash
   cd packages/tokens && pnpm fetch:figma
   ```
6. Enjoy.
