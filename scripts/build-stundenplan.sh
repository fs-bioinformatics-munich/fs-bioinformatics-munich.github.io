#!/bin/bash

# Builds the stundenplan app (git submodule) and copies it into <target>/stundenplan.
# Usage: build-stundenplan.sh [target]   (default: dist, run after `astro build`;
# use `public` for the dev server). Respects ASTRO_BASE so PR previews work.

set -e

APP_DIR="vendor/stundenplan/app"

if [ ! -f "$APP_DIR/package.json" ]; then
    if [ -n "$CI" ]; then
        echo "❌ Submodule vendor/stundenplan missing (checkout with submodules: true)"
        exit 1
    fi
    echo "⚠️  Submodule vendor/stundenplan missing, skipping (git submodule update --init)"
    exit 0
fi

BASE="${ASTRO_BASE:-/}"
BASE="${BASE%/}/"   # ensure exactly one trailing slash
DEST="${1:-dist}/stundenplan"

[ -d "$APP_DIR/node_modules" ] || (cd "$APP_DIR" && npm ci)
(cd "$APP_DIR" && BASE_URL="${BASE}stundenplan/" npm run build)

rm -rf "$DEST"
cp -r "$APP_DIR/dist" "$DEST"
echo "✅ stundenplan copied to $DEST"
