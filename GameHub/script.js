const games = [
    { name: 'Breakout', file: '../Games/breakout.html', description: 'Bounce the ball to break all the bricks before you run out of lives.' },
    { name: 'Catch the Square', file: '../Games/catch-square.html', description: 'Click the moving square before time runs out!' },
    { name: 'Memory Match', file: '../Games/memory.html', description: 'Flip cards and match pairs to test your memory.' },
    { name: 'Minesweeper', file: '../Games/minesweeper.html', description: 'Clear the minefield without triggering hidden mines.' },
    { name: 'Pong', file: '../Games/pong.html', description: 'Classic arcade ping-pong against AI.' },
    { name: 'Simon', file: '../Games/simon.html', description: 'Repeat the light and sound pattern as it grows each round.' },
    { name: 'Snake', file: '../Games/snake.html', description: 'Guide the snake and collect food without hitting walls.' },
    { name: 'Whack-a-Mole', file: '../Games/whack-a-mole.html', description: 'Smash moles as they randomly pop up!' },
    { name: 'Word Scramble', file: '../Games/word-scramble.html', description: 'Unscramble the letters to find the word.' },
    { name: 'Flappy Bird', file: '../Games/flappy-bird.html', description: 'Navigate through pipes with a bouncing bird.' },
    { name: 'Tic Tac Toe', file: '../Games/tic-tac-toe.html', description: 'Classic X and O strategy game.' }
];  

const gameList = document.getElementById('game-list');
const gameContainer = document.getElementById('game-container');
const welcomeScreen = document.getElementById('welcome-screen');

let activeItem = null;
let backBtn = null;

function buildList() {
    games.forEach((game) => {
        const item = document.createElement('li');
        item.className = 'game-list-item';
        item.tabIndex = 0;

        const title = document.createElement('h3');
        title.textContent = game.name;
        const desc = document.createElement('p');
        desc.textContent = game.description;

        item.append(title, desc);
        item.addEventListener('click', () => loadGame(game, item));
        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                loadGame(game, item);
            }
        });
        gameList.appendChild(item);
    });
}

function loadGame(game, item) {
    setActive(item);

    const iframe = document.createElement('iframe');
    iframe.className = 'game-frame';
    iframe.src = game.file;
    iframe.title = game.name;

    backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.type = 'button';
    backBtn.textContent = '← Back to Hub';
    backBtn.addEventListener('click', showWelcome);

    gameContainer.replaceChildren(iframe, backBtn);
}

function showWelcome() {
    setActive(null);
    backBtn = null;
    gameContainer.replaceChildren(welcomeScreen);
}

function setActive(item) {
    if (activeItem) activeItem.classList.remove('active');
    activeItem = item;
    if (activeItem) activeItem.classList.add('active');
}

buildList();
