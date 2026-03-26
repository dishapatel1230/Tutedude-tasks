# Laundry Service Mobile Navigation – Task 8

This project improves the responsive **Laundry Service website** created in the previous task.
In **Task 8**, a **mobile hamburger menu** was implemented so users can access navigation links easily on smaller screens.

The feature was built using **HTML and CSS only**, without JavaScript, by using the **`:focus` pseudo-class** to control the menu visibility.

## Features

### Responsive Navigation Bar

The navigation bar contains:

* Logo on the left
* Navigation links (Home, Services, About Us, Contact Us)
* Username section
* Hamburger menu icon for mobile devices

The layout uses **Flexbox** for alignment and spacing.

### Mobile Hamburger Menu

On mobile devices:

* Navigation links are hidden
* A **hamburger menu icon (☰)** appears
* When the user clicks the icon, the menu opens from the **right side of the screen**

This interaction is handled using the **CSS `:focus` pseudo-class** instead of JavaScript.

Concepts practiced:

* Flexbox layout
* Responsive design
* Media queries
* CSS pseudo-classes
* Mobile navigation patterns

## Responsive Design

The website adapts to different screen sizes.

### Desktop

* Full navigation links visible
* Hero section layout: text on left, image on right

### Tablet

* Layout adjusts spacing and image size

### Mobile

* Navigation links hidden
* Hamburger icon visible
* Menu opens from the right side
* Content stacks vertically

## Mobile Menu Implementation

The hamburger button is wrapped in a `<button>` element so it can receive focus.

Menu visibility is controlled using:

```css
.hamburger:focus + .menu-list{
  display: block;
}
```

## Live Demo

https://dishapatel1230.github.io/Tutedude-tasks/Task-08/index.html

## Challenges I Faced

One challenge was implementing a **mobile menu without JavaScript**.

Initially, I hide the navigation links for smaller screens, but that made the site difficult to navigate on mobile devices.

I solved this by:

* Adding a **hamburger menu button**
* Using the **`:focus` pseudo-class** to show the menu
* Positioning the menu on the **right side using absolute positioning**

## What I Learned

From this task I learned:

* How to create a **mobile hamburger menu**
* How to implement **CSS-only interactions**
* How to control layout using **Flexbox**
* How responsive navigation works in real websites


