# Celum Icon Changelog Scripts

Scripts for fetching and managing icon changelogs from Celum for all Solid Design System icon libraries.

## Scripts

### `fetch-icons-celum.mjs`

Fetches icon changelog data from Celum for all icon libraries and their themes.

**Usage:**

```bash
cd packages/tokens
pnpm fetch:icons-celum
```

**What it does:**

1. Checks the last fetch date stored in each icon library's data file (per theme)
2. Fetches new changelogs from Celum for each missing date
3. Parses added/modified/removed icon sections
4. Saves updated changelogs to `data/icons-changelogs/{library}.json`
5. Updates the last check date per theme

**Supported icon libraries and their themes:**

- **default.json** - Default library
  - Themes: union-investment

- **sd-multi-theming.json** - Multi-theming library
  - Themes: union-investment, bb, sp, vb

- **sd-internal.json** - Internal library
  - Themes: bb, sp, vb (union-investment is hardcoded, not from Celum)

**Supported icon types:**

- `system` - System icons
- `content` - Content icons
- `internal` - Internal icons for bb, sp, and vb

## Data Structure

Changelog data is stored in `data/icons-changelogs/{library}.json`, organized by theme:

```json
{
  "union-investment": {
    "system": [
      {
        "date": "2026-04-03",
        "icons": {
          "added": [
            {
              "name": "Bank.svg",
              "technicalId": "bank",
              "urlSvg": "https://cdn.dam.union-investment.de/original/1013590_Bank.svg",
              "tags": ["finance", "banking"]
            }
          ],
          "modified": [],
          "removed": []
        }
      }
    ],
    "content": [],
    "lastCheck": "4/23/2026"
  },
  "bb": {
    "system": [],
    "content": [],
    "lastCheck": "1/1/2026"
  }
}
```

## Celum API Endpoints

The script uses `{date}` in `YYYY-M-D` format, for example `2026-9-10`. The Union Investment endpoints are already used by the communications repository; all other endpoints are new requests.

| Source folder    | Icon type | Metadata endpoint                                                          | Changelog endpoint                                                                                                                 | Status                         |
| ---------------- | --------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| union-investment | content   | `https://celum-icons.fe.union-investment.de/union-investment/content.json` | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/union-investment/content/union-investment/content_Changelog-{date}.txt` | Already used by communications |
| union-investment | system    | `https://celum-icons.fe.union-investment.de/union-investment/system.json`  | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/union-investment/system/union-investment/system_Changelog-{date}.txt`   | Already used by communications |
| bbbank           | content   | `https://celum-icons.fe.union-investment.de/bbbank/content.json`           | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/bbbank/content/bbbank/content_Changelog-{date}.txt`                     | New request                    |
| bbbank           | system    | `https://celum-icons.fe.union-investment.de/bbbank/system.json`            | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/bbbank/system/bbbank/system_Changelog-{date}.txt`                       | New request                    |
| bbbank           | internal  | `https://celum-icons.fe.union-investment.de/bbbank/internal.json`          | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/bbbank/internal/bbbank/internal_Changelog-{date}.txt`                   | New request                    |
| sp               | content   | `https://celum-icons.fe.union-investment.de/sp/content.json`               | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/sp/content/sp/content_Changelog-{date}.txt`                             | New request                    |
| sp               | system    | `https://celum-icons.fe.union-investment.de/sp/system.json`                | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/sp/system/sp/system_Changelog-{date}.txt`                               | New request                    |
| sp               | internal  | `https://celum-icons.fe.union-investment.de/sp/internal.json`              | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/sp/internal/sp/internal_Changelog-{date}.txt`                           | New request                    |
| vb               | content   | `https://celum-icons.fe.union-investment.de/vb/content.json`               | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/vb/content/vb/content_Changelog-{date}.txt`                             | New request                    |
| vb               | system    | `https://celum-icons.fe.union-investment.de/vb/system.json`                | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/vb/system/vb/system_Changelog-{date}.txt`                               | New request                    |
| vb               | internal  | `https://celum-icons.fe.union-investment.de/vb/internal.json`              | `https://fe-celum-icons-prod.azureedge.net/_versioncontrol/vb/internal/vb/internal_Changelog-{date}.txt`                           | New request                    |

## Environment

No environment variables are required. All Celum endpoints are public.

## Notes

- **default.json**: Tracks changes to union-investment icons only
- **sd-multi-theming.json**: Tracks `system` and `content` changes for union-investment, bb, sp, and vb themes
- **sd-internal.json**: Tracks `internal` changes for bb, sp, and vb (union-investment icons are hardcoded, not from Celum)

## Integration

To integrate with CI/CD, add to your build process:

```bash
pnpm fetch:icons-celum
```

This will keep the icon changelog data fresh before each deployment.
