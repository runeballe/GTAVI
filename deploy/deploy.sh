#!/usr/bin/env bash
# Build, deploy to Cloudflare Workers, then purge the edge cache so changes show up immediately.
# Needs CLOUDFLARE_API_TOKEN with Workers + Cache Purge permissions for runeball.no.
set -euo pipefail
cd "$(dirname "$0")"
ZONE_NAME="runeball.no"

./build.sh
npx wrangler deploy

: "${CLOUDFLARE_API_TOKEN:?CLOUDFLARE_API_TOKEN not set — deployed, but cache NOT purged}"
api() { curl -fsS -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" -H "Content-Type: application/json" "$@"; }
ZONE_ID=$(api "https://api.cloudflare.com/client/v4/zones?name=$ZONE_NAME" | python3 -c 'import sys,json; print(json.load(sys.stdin)["result"][0]["id"])')
api -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/purge_cache" --data '{"purge_everything":true}' \
  | python3 -c 'import sys,json; d=json.load(sys.stdin); print("✓ cache purged" if d.get("success") else d.get("errors")); sys.exit(0 if d.get("success") else 1)'
