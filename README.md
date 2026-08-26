# harshjannawar.com

Personal site for Harsh Jannawar — Security Engineer.

Built as a declassified dossier: the page arrives redacted and the visitor
wipes the black bars away with their cursor.

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Motion
- Type: Syne (display) · Instrument Sans (body) · JetBrains Mono (data)
- Deployed on Vercel

## The redaction lens

`src/components/Redaction.tsx` writes the pointer position to `:root` as page
coordinates once per animation frame; each redaction stores its own page offset
in `--ex` / `--ey`. The mask is then pure CSS, so pointer movement costs one
style write per frame regardless of how many redactions are on screen.

Fallbacks, because the content must never be unreachable:

| Visitor | Behaviour |
|---|---|
| Touch / no hover | Bars lift on scroll via `IntersectionObserver` |
| `prefers-reduced-motion` | Bars never render |
| Keyboard-only | First `Tab` declassifies the document |
| JavaScript disabled | Bars never render (`html.redact-on` gates them) |

Screen readers always read the underlying text — the bar is `aria-hidden`.

## Develop

```bash
npm install
npm run dev
```

## Content

All copy lives in `src/lib/content.ts`. Edit that file; nothing else hardcodes
experience, projects, or contact details.
