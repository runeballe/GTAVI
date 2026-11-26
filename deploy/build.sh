#!/usr/bin/env bash
# Builds public/GTAVI/ for Workers static assets (served at runeball.no/GTAVI/).
# Blank-ocean map tiles (~12.8k identical files) are skipped to stay under the
# 20k-file asset limit; Leaflet's errorTileUrl falls back to tiles/ocean.jpg.
set -euo pipefail
cd "$(dirname "$0")"
OCEAN=85101f7d16dbea5183fa8a335f8a72a1
SRC=../webapp
OUT=public/GTAVI
rm -rf public && mkdir -p "$OUT/tiles"
cp "$SRC"/index.html "$SRC"/landmarks.js "$SRC"/codex.js "$OUT"/
cp "$SRC"/llms.txt "$SRC"/og.jpg "$OUT"/
cp root/* "$SRC"/llms.txt public/   # domain-root crawler files: robots.txt, sitemap.xml, llms.txt
[ -d "$SRC/assets" ] && [ -n "$(ls -A "$SRC/assets")" ] && cp -r "$SRC/assets" "$OUT/"
TILES=$(cd -P "$SRC/tiles" && pwd)
cd "$TILES"
first=""
md5sum */*.jpg | while read -r sum f; do
  if [ "$sum" = "$OCEAN" ]; then
    [ -e "$OLDPWD/$OUT/tiles/ocean.jpg" ] || cp "$f" "$OLDPWD/$OUT/tiles/ocean.jpg"
    continue
  fi
  mkdir -p "$OLDPWD/$OUT/tiles/${f%%/*}"
  cp "$f" "$OLDPWD/$OUT/tiles/$f"
done
cd "$OLDPWD"
echo "files: $(find public -type f | wc -l)  size: $(du -sh public | cut -f1)"
