const board = document.getElementById('board');
        const status = document.getElementById('status');
        const resetButton = document.getElementById('reset-button');
        let currentPlayer = 'X';
        let gameBoard = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        function createBoard() {
            for (let i = 0; i < 9; i++) {
                const cell = document.createElement('button');
                cell.classList.add('cell');
                cell.setAttribute('data-index', i);
                cell.setAttribute('aria-label', `Casilla ${i + 1}`);
                cell.addEventListener('click', handleCellClick);
                board.appendChild(cell);
            }
        }

        function handleCellClick(e) {
            const index = e.target.getAttribute('data-index');
            if (gameBoard[index] !== '' || !gameActive) return;

            gameBoard[index] = currentPlayer;
            e.target.textContent = currentPlayer;
            e.target.setAttribute('aria-label', `Casilla ${parseInt(index) + 1}, ${currentPlayer}`);

            if (checkWinner()) {
                status.textContent = `¡Jugador ${currentPlayer} ha ganado!`;
                gameActive = false;
            } else if (gameBoard.every(cell => cell !== '')) {
                status.textContent = '¡Empate!';
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Turno del jugador ${currentPlayer}`;
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
                [0, 4, 8], [2, 4, 6] // Diagonales
            ];

            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
            });
        }

        function resetGame() {
            gameBoard = ['', '', '', '', '', '', '', '', ''];
            gameActive = true;
            currentPlayer = 'X';
            status.textContent = `Turno del jugador ${currentPlayer}`;
            document.querySelectorAll('.cell').forEach(cell => {
                cell.textContent = '';
                cell.setAttribute('aria-label', `Casilla ${parseInt(cell.getAttribute('data-index')) + 1}`);
            });
        }

        resetButton.addEventListener('click', resetGame);

        createBoard();
        status.textContent = `Turno del jugador ${currentPlayer}`;