# 🌙 Night Mode Toggle (Dark Mode Generator)

A lightweight and responsive **Night Mode/Dark Mode switcher** built using pure JavaScript. This mini project dynamically toggles your webpage between light and dark themes, improving readability and accessibility based on user preference.

## ✨ Features

- ✅ Toggle between **light** and **dark** modes
- ✅ Customizable color schemes
- ✅ Uses a simple `mode` variable and `switch` logic
- ✅ Dynamically updates:
  - Background color
  - Text color
  - Border colors for key containers
  - Icon class (`bi-lightbulb-fill` ↔ `bi-lightbulb`)
- 💡 Integrates seamlessly with Bootstrap Icons

## 🖱️ How It Works

- The `changemode()` function toggles the `mode` variable between `0` (light) and `1` (dark).
- It updates the CSS properties of the body and multiple HTML elements using `document.getElementById`.
- Icons switch from filled to outline to reflect the current mode.

## 💻 Demo Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Geethmilajayasooriya/nightmode.git
