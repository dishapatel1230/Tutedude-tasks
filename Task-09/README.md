# CTA Transform Hover Effect

## Overview

This project demonstrates a **modern Call-To-Action (CTA) button animation** using CSS transforms.
The button appears **slightly tilted by default** and **straightens and scales up on hover**, creating an engaging visual interaction commonly used in modern landing pages.

---

## Features

* Smooth hover animation
* Tilted CTA design for visual emphasis
* Scale and rotation transition
* Lightweight pure CSS solution
* No JavaScript required

---

## Technologies Used

* HTML5
* CSS3
* CSS Transform
* CSS Transition

---

## How the Effect Works

The button uses the CSS `transform` property with two main transformations:

1. **Rotation**

   * The button starts slightly tilted using `rotate(-6deg)`.

2. **Scale on Hover**

   * When the user hovers over the button, it grows slightly using `scale(1.08)`.

3. **Transition**

   * Smooth animation is applied using the `transition` property.

---

## CSS Implementation

```css
button{
  background: linear-gradient(135deg, #1e90ff, #36c1ff);
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 14px;
  font-weight: 600;
  cursor: pointer;

  /* Tilted default state */
  transform: rotate(-6deg);

  /* Smooth animation */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

button:hover {
  /* Straighten and enlarge */
  transform: rotate(0deg) scale(1.08);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}
```
## Live Demo
https://dishapatel1230.github.io/Tutedude-tasks/Task-09/index.html
---
## Challenges I Faced
1. Button Tilting Issue
2. Maintaining Smooth Animation
3. Creating a Natural Tilt Effect

Used transform: scale() instead of changing size-related properties, which allows the button to grow without disturbing the layout.

Added the transition property to animate the transform and box-shadow values, creating a smoother user experience.

Applied transform: rotate(-6deg) for the default state and reset it to rotate(0deg) on hover, making the animation feel natural and interactive.

## Visual Effect

Default State

* Button is slightly **tilted**
* Creates a playful, eye-catching CTA

Hover State

* Button **straightens**
* Button **scales up**
* Adds **shadow for depth**



