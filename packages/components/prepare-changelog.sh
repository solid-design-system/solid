#! /bin/sh

# This script copies the Changelog from the official Solid Components documentation for compatibility with versioning tools like Renovate.

cat ./src/docs/General/Changelog.mdx > ./CHANGELOG.md

exit 0