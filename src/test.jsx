const board = document.getElementById('gameBoard');
let currentPlayer = 'X';
const gameState = Array(9).fill(null);

const checkWin = (player) => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]            // diagonals
  ];
  return winPatterns.some(pattern => pattern.every(index => gameState[index] === player));
};

const checkDraw = () => {
  return gameState.every(cell => cell !== null);
};

const cellClicked = (index) => {
  if (gameState[index] !== null) {
    alert('Platsen är redan tagen!');
    return;
  }
  gameState[index] = currentPlayer;
  renderBoard();
  if (checkWin(currentPlayer)) {
    alert(currentPlayer + ' vinner!');
    resetGame();
    return;
  }
  if (checkDraw()) {
    alert('Oavgjort!');
    resetGame();
    return;
  }
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const renderBoard = () => {
  board.innerHTML = '';
  gameState.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.className = 'cell';
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => cellClicked(index));
    board.appendChild(cellElement);
  });
};

const resetGame = () => {
  gameState.fill(null);
  currentPlayer = 'X';
  renderBoard();
};

renderBoard();
