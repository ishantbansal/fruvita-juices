# Logo & Brand Asset Prompts

Same caveat as before: I can't generate raster images directly in this environment. Below are ready-to-paste prompts for an AI image generator (ChatGPT/DALL·E, Midjourney, Ideogram, Recraft — Recraft and Ideogram are best for vector-style logos specifically), organized by asset type, plus exact specs for where each file goes in the Next.js project. I can also build a first-draft logo directly in **Canva** right now if you'd rather start there — just say so.

**Style anchor** (keep in every prompt for consistency): warm, natural, hand-crafted feel — not corporate, not neon. Palette: mango orange `#EE7F13`, guava pink `#D94068`, leaf green `#3F6B35`, cream `#FBF3E6`, dark ink `#2A2117`. Typography spirit: a soft, characterful serif (like Fraunces) — rounded, a little organic, not a rigid geometric sans.

---

## 1. Logo Suite

### Primary Logotype (wordmark)
> "A wordmark logo reading 'Fruvita' in a warm, characterful serif typeface with soft rounded terminals, deep ink-brown color (#2A2117) on a cream background (#FBF3E6), a small hand-drawn citrus-leaf or fruit-slice icon integrated near the 'i' or as a dot above it, minimal and elegant, no gradients, no 3D effects, flat vector logo design, clean negative space"

### Icon / Brandmark (for favicon, app icon, social avatar)
> "A minimal circular brandmark icon for a fruit juice company, a single stylized fruit slice (cross-section showing segments, like an orange or guava) combined with a small leaf, warm mango-orange (#EE7F13) and leaf-green (#3F6B35) on a cream background, flat vector illustration style, simple enough to be legible at 32x32px, no text, centered composition"

### Monochrome / Single-Color Version
> "Same brandmark icon [fruit-slice + leaf], but in a single flat ink-brown color (#2A2117) on transparent background, for use as a watermark or single-color print application, flat vector, no gradients"

### Horizontal Lockup (logo + tagline, for footer/letterhead)
> "A horizontal logo lockup: the 'Fruvita' wordmark in a soft rounded serif on the left, paired with the tagline 'Real Fruit. Real Fruvita.' in a smaller clean sans-serif underneath or beside it, ink-brown text on cream background, generous whitespace, flat vector, no effects"

---

## 2. Favicon & App Icons (technical specs)
Once you have the icon/brandmark image, export these exact files and drop them into `public/`:

| File | Size | Purpose |
|---|---|---|
| `public/favicon.ico` | 32×32 (multi-size ICO) | Browser tab icon |
| `public/icon.png` | 512×512 | Next.js app icon (auto-picked up from `src/app/icon.png`) |
| `public/apple-touch-icon.png` | 180×180 | iOS home screen icon |

Tip: use [favicon.io](https://favicon.io) or [realfavicongenerator.net](https://realfavicongenerator.net) to convert one square logo image into the full favicon set automatically.

---

## 3. Social Share / OG Image
Needed so links to fruvita.com preview nicely on WhatsApp, Twitter/X, LinkedIn, etc.

> "A social media preview banner, 1200x630px, warm cream background (#FBF3E6) with the 'Fruvita' logotype centered-left, surrounded by 3-4 illustrated fruit-juice bottles (mango, guava, lychee) in warm orange/pink/green tones with soft drop shadows, the tagline 'Real Fruit. Real Fruvita.' in a soft serif font below the logo, flat clean design, generous negative space, no photorealistic elements"

Save as `public/og-image.png` (1200×630) and I can wire it into the site's metadata once you have it.

---

## 4. Remaining Product Photography Prompts
(Continuing from `05-images-sourcing.md`, these two flavors weren't covered yet)

**Base style suffix** (append to both): `, natural warm lighting, shallow depth of field, clean minimal background, professional product photography style, high detail, no text, no logos`

| Flavor | Prompt |
|---|---|
| Guava Thrill | "A glass of vivid pink guava juice with dynamic splash motion, halved pink guavas in the foreground, saturated punchy color grading, energetic bold styling" |
| Electric Peachy Drink | "A glass of vibrant orange-pink peach drink with a fizzy splash effect, halved peaches nearby, bold saturated lighting, dynamic motion-blur droplets" |

---

## 5. Packaging Label Mockup (for physical bottles)
> "A product label mockup for a fruit juice bottle, label wraps around a clear glass bottle, cream background (#FBF3E6) with the Fruvita logotype at top, a bold illustrated fruit icon in the center (mango/guava/orange depending on flavor), flavor name in a soft serif font, a thin mango-orange and leaf-green border detail, minimal ingredient/nutrition text block at the bottom, flat vector packaging design, front-facing view"

---

## 6. Background Textures & Patterns (for section dividers, email headers, etc.)
> "A seamless subtle background texture, warm cream paper grain (#FBF3E6), very light and unobtrusive, small scattered hand-drawn fruit-slice and leaf doodles in low-opacity mango-orange and leaf-green, flat vector pattern, tileable"

---

## 7. Orchard / Lifestyle Hero Photography (About page, brand storytelling)
> "A sun-drenched fruit orchard at golden hour, wooden crates overflowing with ripe mangoes and guavas in the foreground, warm dappled light through leaves, a rustic wicker basket, shallow depth of field, documentary-style photography, warm golden and green tones, no people or with a single farmer silhouette in the background"

---

## Next Steps
1. Run the Section 1 logo prompts through an image generator — Ideogram or Recraft tend to produce the cleanest flat vector-style logos; regenerate a few variations and pick your favorite.
2. Once you have a final logo file, tell me and I'll wire it into `Nav.tsx` (replacing the text wordmark), `Footer.tsx`, favicon, and the OG image metadata.
3. For product bottle photography — either run the Section 4 (+ prior file's) prompts, or better: once real packaging design/labels exist, get actual product photography shot professionally. AI-generated bottle images are fine for placeholder/mockup use but won't match your real packaging.

**Or — I can start now:** I have access to Canva in this session and could generate a first-draft logo/icon directly using their design tools. Want me to try that as a starting point instead of / alongside the AI prompts above?
