const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function() {
      handleCellClick(cell);
    });
  }
  
function handleCellClick(cell) {
  const cellIndex = cell.id;
  
  
  if (board[cellIndex] === '' && gameActive) {
   
    cell.textContent = currentPlayer;
    board[cellIndex] = currentPlayer;
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
} 

  resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
      cell.textContent = '';
    });
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
  });