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

echo "Done."