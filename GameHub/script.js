const games = [
    { name: 'Catch the Square', file: '../Games/catch-square.html', description: 'Click the moving square before time runs out!' },
    { name: 'Memory Match', file: '../Games/memory.html', description: 'Flip cards and match pairs to test your memory.' },
    { name: 'Pong', file: '../Games/pong.html', description: 'Classic arcade ping-pong against AI.' },
    { name: 'Snake', file: '../Games/snake.html', description: 'Guide the snake and collect food without hitting walls.' },
    { name: 'Whack-a-Mole', file: '../Games/whack-a-mole.html', description: 'Smash moles as they randomly pop up!' },
    { name: 'Word Scramble', file: '../Games/word-scramble.html', description: 'Unscramble the letters to find the word.' },
    { name: 'Flappy Bird', file: '../Games/flappy-bird.html', description: 'Navigate through pipes with a bouncing bird.' }
];

const gameList = document.getElementById('game-list');
const gameContainer = document.getElementById('game-container');
const welcomeScreen = document.getElementById('welcome-screen');

function initGameList() {
    games.forEach((game, index) => {
        const li = document.createElement('li');
        li.className = 'game-list-item';
        li.innerHTML = `
            <h3>${game.name}</h3>
            <p>${game.description}</p>
        `;
        li.addEventListener('click', () => loadGame(game.file, li));
        gameList.appendChild(li);
    });
}

function loadGame(gameFile, clickedItem) {
    document.querySelectorAll('.game-list-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedItem.classList.add('active');

    const iframe = document.createElement('iframe');
    iframe.src = gameFile;
    iframe.className = 'game-frame';

    gameContainer.innerHTML = '';
    gameContainer.appendChild(iframe);

    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.textContent = '← Back to Hub';
    backBtn.addEventListener('click', () => {
        gameContainer.innerHTML = '';
        gameContainer.appendChild(welcomeScreen);
        document.querySelectorAll('.game-list-item').forEach(item => {
            item.classList.remove('active');
        });
    });
    gameContainer.appendChild(backBtn);
}

document.addEventListener('DOMContentLoaded', initGameList);