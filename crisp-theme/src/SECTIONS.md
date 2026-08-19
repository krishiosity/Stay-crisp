# Page sections

`index.html` is composed of the following top-to-bottom sections. Each is a self-contained
block you can reorder, duplicate, or remove. Styling for all of them lives in
`assets/css/theme.css`, grouped by the same headings.

| Section              | Selector / anchor      | Purpose |
| -------------------- | ---------------------- | ------- |
| Header / nav         | `header`               | Sticky top bar, brand, links, theme toggle, account/cart |
| Hero                 | `.hero`                | "Flow. Focus. Energy.", badge row, product pucks, CTAs |
| Ticker               | `.ticker`              | Scrolling keyword marquee |
| Performance evolved  | `#evolved`             | Dark inset intro panel |
| Flavors              | `#flavors`             | "Same Edge. Four Flavors." — product cards with mg options |
| Editorial            | `.editorial.flow / .go`| "Built to Flow" / "Built to Go" image blocks |
| Ritual               | `.steps`               | RIP · SLIP · PERFORM numbered steps |
| Science              | `#science`             | "Powered by Purpose" ingredient strip + vitamin row |
| Testimonials         | `.tgrid`               | "What high performers say" cards |
| Newsletter           | `.stay`                | "Stay Crisp" email signup |
| Footer               | `footer`               | Link columns, trust badges, copyright |

## Badge icons

The hero badge row (Zero Nicotine, Caffeine + Nootropics, Lab Tested, Made in USA) uses
inline SVG line icons whose strokes reference `var(--ink)`, so they invert automatically
between light and dark themes. Edit them directly in `index.html`.

## Adding a section

1. Copy an existing `<section>` block in `index.html`.
2. Give it a unique `id` if it needs an anchor link.
3. Add matching styles under a new comment header in `assets/css/theme.css`.
4. Keep new colors as tokens in `:root` and `[data-theme="dark"]`.
