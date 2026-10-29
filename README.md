# Mini Games

A collection of small browser games written in plain HTML, CSS and JavaScript. Every game is a single self-contained file — no build step, no dependencies, no framework.

## Play

Open `GameHub/index.html` to load the hub, where every game sits behind a sidebar, or open any file in `Games/` directly.

If your browser blocks iframes on `file://` URLs, serve the folder instead:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000/GameHub/
```

## Games

| File | What it is |
| :--- | :--- |
| `Games/breakout.html` | Bounce a ball through rows of bricks before the lives run out. |
| `Games/catch-square.html` | 30-second reflex test: click the square before it jumps. |
| `Games/flappy-bird.html` | Guide a block through the gaps between pipes. |
| `Games/memory.html` | Flip cards and find all the matching pairs. |
| `Games/minesweeper.html` | Clear the minefield without detonating anything. |
| `Games/pong.html` | Arcade paddle ball against the computer, first to five. |
| `Games/simon.html` | Repeat a growing pattern of lights and tones. |
| `Games/snake.html` | Eat fruit, grow, and avoid your own tail. |
| `Games/tic-tac-toe.html` | X and O, two players on one board. |
| `Games/whack-a-mole.html` | 15 seconds of moles popping out of six holes. |
| `Games/word-scramble.html` | Put the shuffled letters back in order. |

## Other projects

| Path | What it is |
| :--- | :--- |
| `GameHub/` | Sidebar hub that embeds every game in an iframe. |
| `calculator/` | Calculator with square root, powers, modulo and percentages. |

## Layout

```
.
├── GameHub/        hub page: index.html, style.css, script.js
├── Games/          one self-contained .html file per game
├── calculator/     calculator.html + calculator.css + calculator.js
└── README.md
```

Games keep their markup, styles and logic in one file on purpose: each one can be opened, read and tinkered with on its own.

## Adding a game

1. Create `Games/<name>.html` following the structure of an existing game.
2. Add an entry to the `games` array in `GameHub/script.js`.
3. Add a row to the tables above.
