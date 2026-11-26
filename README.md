# GTA VI Playthrough Tracker

Live: **https://runeball.no/GTAVI/**

A single-page tracker for GTA VI story mode:

- **Checklist** — all 102 missions plus finds, missables and side jobs, per chapter. Progress saves in your browser (localStorage).
- **Money Fast** — money-making guide.
- **Live Map** — the real Leonida map with pins for supercars, hide spots, secrets and chapter guide items. Search, filter by category, click a pin in the list to fly to it. Optional layer with ~1,200 gtadb.org landmarks.
- **Fastest Cars** — top 30 by in-game Speed stat with locations, how-to, map pins and a collected checklist (sources: G2A, Insider Gaming, GTABase).
- **Vehicles** and **Weapons** — searchable galleries by class, linking to gta.wiki (supercars with a known spawn jump to the map).
- **Legendary weapons** (under Weapons) and **Challenges** (under Cheats) — checklists with locations / cheat unlocks (source: Insider Gaming).
- **Cheats** — all 61 cheats with sources cross-checked, plus an unlock checklist with progress counter and a field to note codes yourself.
- **Trophies** — tick off as you earn them.

Plain HTML/CSS/JS + [Leaflet](https://leafletjs.com) — no build step for the app itself.

## Run locally

```sh
git clone --recursive https://github.com/runeballe/GTAVI.git
cd GTAVI/webapp
python3 -m http.server 8000   # → http://localhost:8000
```

Vehicle/weapon thumbnails (`webapp/media/`) aren't in git; without them the galleries show emoji placeholders.

`webapp/tiles` is a symlink into the `gtadb` submodule (`gtadb/maps/tiles/6/day`). If you cloned without `--recursive`, run `git submodule update --init`.

## Deploy (Cloudflare Workers static assets)

```sh
cd deploy
./deploy.sh        # build + wrangler deploy + purge Cloudflare cache
```

`build.sh` skips ~12,800 byte-identical blank-ocean tiles (keeps one as `tiles/ocean.jpg`, which Leaflet uses as `errorTileUrl`). That keeps the upload under the 20,000-file asset limit of the Workers free plan. `worker.js` only redirects lowercase `/gtavi` to `/GTAVI/`.

## Credits

- Extra map pins: [Open GTA 6 Map](https://github.com/fbritoferreira/gta6) by fbritoferreira — "Map data from Open GTA 6 Map (fbritoferreira), CC BY 4.0" (converted to game coordinates; `deploy/tools/fetch_opengta6.py`). Plus a few pins from [gta6map.io](https://gta6map.io) (not stored in this repo).
- Map tiles and landmark coordinates: [gtadb.org](https://gtadb.org) and its contributors — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) ([source](https://github.com/rolux/gtadb.org)).
- Cheat and trophy data: [leonidaverse.com](https://leonidaverse.com/en/codex) (unofficial fan wiki), cross-checked with [gta.wiki](https://gta.wiki/w/Cheats_in_GTA_VI).
- Vehicle/weapon names and classes: [gta.wiki](https://gta.wiki) (CC BY-SA). Thumbnails are Rockstar images and are not included in this repo.
- Guide tips compiled from community sources (Reddit, X, Skycoach, G2A, Insider Gaming, VICE, Space4Games, Rock Paper Shotgun).

## License

Code: [MIT](LICENSE). Third-party data keeps its own license — gtadb.org tiles and landmarks are CC BY 4.0 (attribution required); cheat/trophy data belongs to its sources.

Fan project, not affiliated with Rockstar Games or Take-Two Interactive.
