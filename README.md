# seangolder.github.io

Personal academic website. Plain HTML and CSS — no site generator, no build
step, no dependencies. What is in this folder is exactly what gets served.

## Files

```
index.html        About page (the homepage)
research.html     Papers, works in progress, talks
interests.html    Early music and other interests
style.css         All styling for every page
files/            PDFs — the CV lives here
images/           Photographs
.nojekyll         Tells GitHub to serve these files as they are
```

## How to change something

Open the relevant `.html` file in any text editor and type. Save. That is the
whole workflow. Paragraphs are ordinary `<p>...</p>` text and you can edit the
words inside them without touching anything else.

Blocks of sample wording are marked with `<!-- SAMPLE TEXT -->` comments.
Those comments are invisible on the live page — delete them once the text has
been rewritten.

## How to publish a change

Either edit the file directly on github.com (click the file, then the pencil
icon, then "Commit changes"), or edit locally and upload. GitHub rebuilds the
site within about a minute.

## Common tasks

**Replace the CV.** Put the new PDF in `files/` with the name
`golder-cv.pdf`, replacing the old one. Every link on the site points at that
name, so nothing else needs changing.

**Add a paper.** Open `research.html`, copy an existing block that starts with
`<div class="entry">`, paste it where you want the new paper to appear, and
change the title, authors, and links inside it.

**Change the colours or fonts.** The values at the top of `style.css` under
`:root` control the whole site. Change one value there and every page follows.
The second block sets the dark-mode versions of the same colours.

**Add a new page.** Copy `interests.html`, rename it, replace the content
between `<main>` and `</main>`, and add a link to it in the `<nav>` list of
every page.

## Notes

- The email address on the homepage is assembled by a small script at the
  bottom of `index.html`, so that address-harvesting bots do not pick it up.
  To change the address, edit the `user` and `host` values in that script.
- The site works correctly when opened directly from disk, so you can preview
  any change by double-clicking `index.html` before publishing it.
