#!/usr/bin/env bash
set -euo pipefail

TECHDOCS_REPO="https://github.com/cncf/techdocs.git"
TECHDOCS_REF="${TECHDOCS_REF:-main}"

WORKDIR="$(mktemp -d)"
cleanup() { rm -rf "$WORKDIR"; }
trap cleanup EXIT

echo "Cloning techdocs ($TECHDOCS_REF)..."
git clone --depth 1 --branch "$TECHDOCS_REF" "$TECHDOCS_REPO" "$WORKDIR/techdocs"

echo "Syncing techdocs/docs -> docs/techdocs ..."
rm -rf docs/techdocs
mkdir -p docs/techdocs
cp -R "$WORKDIR/techdocs/docs/." docs/techdocs/

echo "Syncing techdocs top-level analyses/ -> docs/techdocs/analyses ..."
rm -rf docs/techdocs/analyses
mkdir -p docs/techdocs/analyses
cp -R "$WORKDIR/techdocs/analyses/." docs/techdocs/analyses/

echo "Normalizing known broken relative image paths in synced analyses ..."
find docs/techdocs/analyses -type f -name "*.md" -exec perl -i -pe 's!\.\./docs/images/!../../../images/!g' {} +

echo "Done."