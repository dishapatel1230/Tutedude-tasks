# Task 04 – Full Screen Layout

## Overview

In this task I created a simple full screen layout using HTML and CSS.

The goal was to make the page take exactly the height of the viewport (100vh) so that no vertical scrolling appears.

The page contains a small navbar and a hero section with a button in the center.

---

## What I Learned

While working on this task I understood better how viewport units work and how spacing can accidentally create scroll.

I also learned that padding and margins can increase the total height of elements if box-sizing is not handled properly.

Using flexbox made it easier to structure the page so the hero section fills the remaining space.

---
## Viewport Layout Explanation
Viewport Height (100vh)
│
│   10vh  →  Top Margin
│
├───────────────────────────────
│                               │
│                               │
│       image-container         │
│           80vh                │
│                               │
│                               │
├───────────────────────────────
│
│   10vh  →  Bottom Margin
│
Total = 10vh + 80vh + 10vh = 100vh
The page is designed so that the total vertical height equals the viewport height (100vh).
Because everything adds up to exactly 100vh, the page fits perfectly in the viewport and no vertical scrolling appears.

## Challenges

Initially I tried using position: fixed but later realized that it avoids the real layout problem.

After removing it, I adjusted the layout using flexbox and box-sizing so the page height matches the viewport height exactly.

---

## How to Run

1. Download or clone the project
2. Open the folder
3. Open index.html in a browser

No installation is required.

---

## Features

- Full viewport layout
- No scrolling
- Simple responsive structure
- Button hover effect