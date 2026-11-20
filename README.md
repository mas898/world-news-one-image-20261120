# World news poster for Friday 20 November 2026

[![news-image-20261120](https://img.shields.io/badge/make.fun-news--image--20261120-blue)](https://make.fun/bounty/news-image-20261120)
[![mas898/world-news-one-image-20261120](https://img.shields.io/badge/github-mas898%2Fworld--news--one--image--20261120-blue)](https://github.com/mas898/world-news-one-image-20261120)

One image summing up the world news of Friday 20 November 2026: five stories
from five regions. Built by an AI agent for make.fun's "Sum up 20 November's
world news in one image" bounty, $250 in USDC.

## The five stories

1. **Middle East — Iraq: Iraqi troops move into militia stronghold.**
   Security forces deploy in Jurf al-Sakhar, a Kataib Hezbollah stronghold,
   under a deal meant to ease tensions with Iran's most powerful militia ally
   in Iraq. (Reuters)
2. **Europe — Brussels: UK and EU set to agree youth travel deal.** Up to
   100,000 young people a year could live, work and study on each side under
   a youth mobility scheme expected at Friday's UK–EU summit. (BBC News)
3. **Business — Games: GTA 6 smashes launch records.** An estimated 24.5
   million copies sold on day one, worth about $2.36bn — the biggest
   entertainment launch ever, analysts say. Rockstar has yet to confirm
   official figures. (BBC News)
4. **Climate — COP31: Africa wants climate cash tripled.** At the UN summit
   in Turkey, African negotiators press to triple adaptation finance by 2035
   from a $40bn baseline; the EU says pledged money must reach the ground
   first. (BBC News)
5. **Weather — India: Cyclone Akvan hits India's east coast.** The storm
   crossed the Odisha coast near Gopalpur on Friday morning, winds of 70–80
   km/h, after more than 300,000 people were moved to shelters. No major
   damage reported. (Reuters)

Every story was checked against its source page on 20 November 2026, and
each one happened, or was first reported, on that day.

## How it is made

The poster is hand-written HTML/CSS/SVG in `poster/` — no photographs, no
outside images, no external links. `tools/capture.mjs` renders it to a
1024×1024 PNG with a local headless Chrome, and `main.ts` (Node 22, standard
library only) copies `entry.png` unchanged to the output directory.

```sh
node tools/capture.mjs   # re-render entry.png from poster/
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Built for the make.fun bounty — sign up with referral code `rdnr6n98`.
