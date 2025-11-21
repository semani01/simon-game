# 🎮 The Simon Game

A web-based implementation of the classic electronic memory game **Simon**. Built with jQuery, HTML, and CSS, this game tests your memory by generating an ever-growing sequence of colors and sounds that you must repeat correctly.

## 🌟 Features

* **Interactive Gameplay:** Responsive buttons with visual animations and audio feedback.
* **Progressive Difficulty:** The pattern gets longer and more complex with every level.
* **Game Over Handling:** Visual feedback (red flash) and sound effects when the wrong sequence is entered.
* **Restart Functionality:** Ability to restart the game immediately after losing by pressing any key.

## 🕹️ How to Play

1.  Open the game in your browser.
2.  **Press any key** on your keyboard to start Level 1.
3.  Watch the sequence of flashing colors and listen to the sounds.
4.  **Repeat the sequence** by clicking the colored buttons in the correct order.
5.  If you get it right, the game moves to the next level and adds a new color to the sequence.
6.  If you get it wrong, the game ends. Press any key to restart and try to beat your high score!

## 🛠️ Tech Stack

* **HTML5:** Structure and layout of the game board.
* **CSS3:** Styling, grid layout, and animations (flashes, shadows).
* **JavaScript (ES6):** Game logic, state management, and sound playback.
* **jQuery:** Simplified DOM manipulation and event handling.

## 📂 Project Structure

```text
.
├── index.html      # Main game interface
├── styles.css      # Game styling
├── game.js         # Game logic
├── sounds/         # Audio files (red.mp3, blue.mp3, wrong.mp3, etc.)
└── README.md       # Project documentation
```

## 🚀 Getting Started

To play the game locally:

1.  Clone this repository:
    ```bash
    git clone [https://github.com/YOUR-USERNAME/simon-game.git](https://github.com/YOUR-USERNAME/simon-game.git)
    ```
2.  Navigate to the project folder.
3.  Open `index.html` in your web browser.

---
*Built as part of a Web Development challenge.*