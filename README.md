# sanah-blog 🤍

My personal little corner of the internet — part about-me page, part photo album, part journal. I wanted something that felt like a scrapbook rather than a template, so everything's built around a polaroid-and-washi-tape look instead of the usual card-grid personal site.

![status](https://img.shields.io/badge/status-active-brightgreen) ![license](https://img.shields.io/badge/license-MIT-blue)

## What's here

- **A hero intro** with my name and a short blurb
- **An about section** — currently placeholder text, meant to be rewritten in my own voice
- **A photo gallery** styled as tilted polaroids with tape, for life pictures
- **A journal / blog section** — a simple list of entries that open into a reading view when clicked

## Adding my own photos

Drop image files into the `/images` folder using these names and they'll show up automatically, no HTML editing needed:

```
images/hero.jpg
images/about.jpg
images/gallery-1.jpg
images/gallery-2.jpg
images/gallery-3.jpg
images/gallery-4.jpg
images/gallery-5.jpg
images/gallery-6.jpg
```

Until a file exists, that slot just shows a soft placeholder telling you what filename it's expecting — so the page never looks broken, just unfinished. Square-ish photos crop best into the polaroid frames.

## Writing journal entries

All the blog content lives in `posts.js` as a plain array — no CMS, no database. Each entry looks like:

```js
{
  title: "a good day recently",
  date: "march 2026",
  excerpt: "the one-line preview shown in the list",
  body: [
    "First paragraph.",
    "Second paragraph, and so on.",
  ],
}
```

Add a new object to the top (or wherever) of the array in `posts.js` and it appears in the journal list immediately — click it to read the full entry in the pop-up view.

## Editing the about-me text

Open `index.html` and look for the `<section id="about">` block — it's plain paragraphs and a short list, easy to rewrite without touching any styling.

## Running it

Just open `index.html` in a browser. No build tools, no dependencies to install.

```bash
npx serve .
```

## Notes on the design

- Fonts: **Caveat** (the handwritten one) for names and headings, **Lora** for the journal/reading text, **Nunito** for small UI labels — three fonts doing three different jobs on purpose.
- Palette leans dusty plum and sage rather than the usual cream-and-terracotta look most templates default to.
- Fully responsive — the hero and about layout stack on mobile.

## License

MIT — though this one's mine, so if you fork it, maybe make it yours too. 🤍
