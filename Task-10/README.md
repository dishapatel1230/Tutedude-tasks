# Hero Section Image Animation

This project adds an animation effect to the hero section image to make the UI more engaging.

The image moves in a circular orbit using CSS animations.

---

## Features
- Smooth orbit rotation
- Continuous animation using CSS keyframes
- Simple and clean design

---

## Technologies Used
- HTML
- CSS

---

## How to Run
1. Download or clone the project
2. Open the project folder
3. Run the `index.html` file in any web browser

## Live Demo
https://dishapatel1230.github.io/Tutedude-tasks/Task-10/index.html
---

##  How animtion works
- `transform: translate()` for rotation
- `@keyframes` for animation

## CSS implementation
```css
@keyframes rotateOrbit {
    0%, 100% {
    transform: translate(0px, 0px);
  }
  25%{
    transform: translate(0px,25px);
  }
  50%{
    transform: translate(50px,50px);
  }
  75%{
    transform: translate(50px 0px);
  }
}
@keyframes squeeze {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1,1);
  }

  25% {
    transform: translate(-50%, -50%) scale(1.15,0.85);
  }

  50% {
    transform: translate(-50%, -50%) scale(1,1);
  }

  75% {
    transform: translate(-50%, -50%) scale(0.85,1.15);
  }
}
```
---
## Challenges I Faced

- Understanding how to `translate()` to create a circular orbit was initially confusing.

- The image was not moving in a proper circle at first because of incorrect positioning and transform order.

- It was difficult to keep the animation smooth and continuous without jumps.

- Aligning the image at the center of the orbit required proper use of `position: absolute` and `transform: translate(50px, 50px)`.

- Managing multiple animations (orbit and squeeze) together was tricky at first.

- Ensuring the CSS file was correctly linked and everything worked properly in the browser.
