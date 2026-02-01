# Quick Quiz - HTMLquestions

Quick Quiz is a web-based multiple-choice quiz game built by Bunny Developers. It tests users' knowledge of HTML and web development concepts. The app features a modern UI, score tracking, high scores, and social media links.

## Features

- **Multiple Choice Questions:** Questions are randomly selected from a pool in [`questions.json`](questions.json).
- **Score Tracking:** Earn points for each correct answer. Your score is displayed and saved at the end of the game.
- **High Scores:** Top scores are stored in the browser's local storage and displayed on the High Scores page.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Footer with Social Links:** Connect with Bunny Developers on various social platforms.

## Folder Structure

```
HTMLquestions/
├── app.css                # Main styles
├── end.html               # End screen (save score)
├── end.js                 # End screen logic
├── index.html             # Home page
├── launch.json            # VS Code launch config
├── LICENSE                # Apache 2.0 License
├── questions.json         # Quiz questions
├── README.md              # Project documentation
├── footer/
│   ├── footer.css         # Footer styles
│   ├── index.html        # Footer markup
│   └── footer.js          # Footer loader script
├── highscores/
│   ├── highscores.css     # High scores styles
│   ├── index.html    # High scores page
│   └── highscores.js      # High scores logic
├── img/                   # Images and icons
│   ├── code-master.jpg
│   ├── fb-icon.png
│   ├── insta-icon.png
│   ├── ln-icon.png
│   ├── tik-tok-icon.png
│   └── yt-icon.png
└── test/
    ├── game.css           # Game page styles
    ├── index.html          # Game page
    └── game.js            # Game logic
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, etc.)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for VS Code (recommended for local development)

### Running Locally

1. **Clone or Download the Repository**
   ```
   git clone https://github.com/bunny-developers/codequiz.git
   ```

2. **Open in VS Code**
   - Open the `codequiz` folder in Visual Studio Code.

3. **Start Live Server**
   - Right-click `index.html` and select "Open with Live Server".
   - Or use the launch configuration in [`launch.json`](launch.json).

4. **Play the Game**
   - Visit `http://localhost:5500/codequiz/index.html` in your browser.
   - Click "Play" to start the quiz.

### File Overview

- [`index.html`](index.html): Home page with navigation.
- [`test/index.html`](test/index.html): Main quiz interface.
- [`test/game.js`](test/game.js): Loads questions, handles gameplay and scoring.
- [`end.html`](end.html) & [`end.js`](end.js): End screen, save score.
- [`highscores/index.html`](highscores/highscores.html) & [`highscores/highscores.js`](highscores/highscores.js): View high scores.
- [`footer/index.html`](footer/index.html), [`footer/footer.js`](footer/footer.js), [`footer/footer.css`](footer/footer.css): Footer component with social links.
- [`questions.json`](questions.json): Question bank.

## Customization

- **Add Questions:** Edit [`questions.json`](questions.json) to add or modify quiz questions.
- **Change Styles:** Modify [`app.css`](app.css), [`game.css`](test/game.css), or other CSS files.
- **Update Social Links:** Edit [`footer/footer.html`](footer/footer.html) to change footer links.

## License

This project is licensed under the [Apache License 2.0](LICENSE).

## Credits

Developed by Bunny Developers.

- [Facebook](https://www.facebook.com/profile.php?id=100064937792974)
- [YouTube](https://youtube.com/@hillaryotieno-b7s?si=UO0aKHpw9BvQE02D)
- [LinkedIn](https://www.linkedin.com/in/hillary-okoth-38a9a6268?trk=contact-info)
- [TikTok](https://www.tiktok.com/@bunny.developers)
- [Instagram](#)

---

Enjoy learning and testing your HTML skills!