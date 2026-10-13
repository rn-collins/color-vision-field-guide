# Repair, October 13, 2026

RN confirmed on October 13, 2026 that the Ask a Neuroscientist (AaN) brand owns this guide and asked for the live site and repo to be fixed. Claude made these changes. Earlier versions remain in git history.

## 1. Child privacy

The served page named a child in RN's family and described his eye appointment: what he said, what he saw on the plate, the doctor's findings, the tests he took and his reactions to them. All of that has been removed from the page, the search index (app.js), README.md and RESEARCH.md.

- The headline quote and the opening story were replaced with a general example, labeled as illustrative, and one line of family framing: "This guide began with a child in our family." Nothing else about RN's children was added.
- The test panels now describe how each test works in general. The "experienced at appointment" labels and the "why it matters here" notes about the child were rewritten.
- The three-generation inheritance diagram now uses Grandfather, Mother and Son instead of family names.
- The teacher note is now a template for "this student".
- The claim ledger and "what remains unknown" section no longer refer to one child's records.
- RESEARCH.md no longer maps the appointment transcript to the page.

## 2. Science and citations

All 24 sources and 9 science claims were checked (CITATIONS-Oct13.md). 22 sources were verified and 2 dead links were replaced: the Dalton history link and the NLM inheritance illustration link. No claims needed correcting.

## 3. AaN rules

- "Education, not medical advice." appears under the headline, in the opening section and in the scope note.
- All em and en dashes were reworded or replaced with hyphens in compound words such as red-green (index.html, app.js, deep.js, README.md, RESEARCH.md).
- No exclamation points in the page text.
- The design, layout, images and interactive demos are unchanged.

## Checks run

- `npm run build` (vite) succeeded. The built page was rendered in jsdom with its script: no errors; no child name, transcript or appointment references; no dashes; search and the teacher note work.

## For RN

The repo is public, so the child's name and exam details remain readable in git history until the repo is made private (or the history is rewritten).
