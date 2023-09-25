//Variables

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;


//Event listener when click
for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', function() {
      handleCellClick(cell);
    });
  }
 

//Alternate between X and O 
function handleCellClick(cell) {
  const cellIndex = cell.id;

  if (board[cellIndex] === '' && gameActive) {
    cell.textContent = currentPlayer;
    board[cellIndex] = currentPlayer;

    const winner = checkWin();
    if (winner) {
      gameActive = false;
      if (winner === 'tie') {
        alert("It's a tie!");
      } else {
        alert(`Player ${winner} wins!`);
      }
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}
// Check its a win or a tie
function checkWin() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (!board.includes('')) {
    return 'tie'; // It's a tie if the board is full with no winner
  }

  return null; // No winner yet
}

//Reset Button
  resetButton.addEventListener('click', () => {
    cells.forEach(cell => {
      cell.textContent = '';
    });
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
  });