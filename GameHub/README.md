# Game Hub

A sidebar hub that loads every game in this repository inside an iframe.

## How to use

1. Open `index.html` in a browser.
2. Pick a game from the sidebar (mouse, or Tab + Enter).
3. Use "Back to Hub" to return to the welcome screen.

If your browser blocks `file://` iframes, serve the repo root instead:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/GameHub/
```

## Games listed

| Game | Description |
| :--- | :--- |
| Breakout | Clear the bricks before the lives run out |
| Catch the Square | Click the square before the 30 seconds are up |
| Flappy Bird | Squeeze through the gaps between pipes |
| Memory Match | Flip cards and find every pair |
| Minesweeper | Flag the mines and clear the board |
| Pong | Paddle ball against the computer, first to five |
| Simon | Repeat a growing pattern of lights and tones |
| Snake | Eat, grow, and avoid your own tail |
| Tic Tac Toe | Two players, one board |
| Whack-a-Mole | 15 seconds of moles popping up |
| Word Scramble | Unscramble the letters into a real word |
| Calculator | Powers, roots, modulo and percentages |

## Files

```
GameHub/
├── index.html    hub page
├── style.css     hub styling
├── script.js     game list and loading logic
└── README.md     this file
```

To add a game, drop it in `Games/` and add an entry to the `games` array in `script.js`.
