# 🎨 Task 04: CSS Units, Box Model & Viewport

This project focuses on precision layouts using **CSS Viewport Units** (`vw`/`vh`) and the **Box Model**. The challenge was to create a perfectly centered, non-scrolling layout without using Flexbox, Absolute Positioning, or `overflow: hidden`.

---

## 🔗 Live Demo
Check out the live project here:  
**[🚀 View Live Task]**

---

## 🛠 Tech Stack 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

---

## 💡 Key Learning Milestones

### **The "No Scroll" Challenge**
I learned that scrolling occurs when content dimensions exceed $100\%$. To solve this without using "cheat codes" like `overflow: hidden`, I mastered:
- **`box-sizing: border-box`**: Ensuring padding and borders stay *inside* the defined width.
- **Viewport Units**: Using `vh` and `vw` to ensure the container is relative to the screen size.
- **Image Display**: Setting `display: block` on the image to remove the default 3px "ghost" spacing at the bottom.

### **Layout Logic**
- **Centering**: Used `margin: 10vh auto` to calculate 25% side spacing ($50vw$ width + `auto` margins = $25vw$ on each side).
- **Gradients**: Implemented a multi-color `linear-gradient` for a vibrant, professional-looking button.

---

## 📂 Files in this project
- `index.html` - Semantic HTML structure.
- `style.css` - Custom styling using Viewport units and Box Model logic.