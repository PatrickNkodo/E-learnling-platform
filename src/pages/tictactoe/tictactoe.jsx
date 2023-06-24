// Import the necessary modules and styles
import React, { useState } from "react";
import "./tictac.css";

// Define the App component
function App() {
  // Initialize state variables for the game board, current player, winner, and move history
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), location: null }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc"); // Initialize the sort order to ascending

  // Define the possible winning lines in the game board
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Define a function to check if there is a winner in the current game board
  const checkWinner = (board) => {
    for (let i = 0; i < lines.length; i++) { // Loop through all the winning lines
      const [a, b, c] = lines[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a] !== null) { // Check if there is a winner in the current line
        setWinner(board[a]); // Set the winner state to the winner's symbol (X or O)
        return lines[i]; // Return the winning squares
      }
    }
    return null; // If no winner is found, return null
  };

  // Define a function to handle a click on a square
  const handleClick = (index) => {
    if (winner || board[index]) { // If there is already a winner or the square is already filled, do nothing
      return;
    }

    const newBoard = [...board]; // Create a copy of the game board
    newBoard[index] = player; // Set the clicked square to the current player (X or O)
    setBoard(newBoard); // Update the game board with the new square

    const newHistory = history.slice(0, stepNumber + 1); // Create a new copy of the move history up to the current step
    const currentSquares = newBoard.slice(); // Create a copy of the current game board
    const location = `(${index % 3 + 1}, ${Math.floor(index / 3) + 1})`; // Calculate the location of the current move
    newHistory.push({ squares: currentSquares, location }); // Add the current move to the move history
    setHistory(newHistory); // Update the move history state

    const winningSquares = checkWinner(newBoard); // Check if there is a winner in the updated game board after the click
    if (winningSquares) { // If there is a winner
      setWinner(newBoard[winningSquares[0]]); // Set the winner state to the winner's symbol (X or O)
      setStepNumber(newHistory.length - 1); // Update the step number to the end of the move history
    } else if (newBoard.every((square) => square !== null)) { // If all squares are filled and there is no winner
      setWinner("draw"); // Set the winner state to "draw"
      setStepNumber(newHistory.length - 1); // Update the step number to the end of the move history
    } else { // If the game is still ongoing
      setPlayer(player === "X" ? "O" : "X"); // Change the current player to the other player (X or O)
      setStepNumber(newHistory.length); // Update the step number to the end of the move history
    }
  };

  // Define a function to render a square
  const renderSquare = (index) => {
    const winningSquares = winner && winner.includes(index); // Check if the current square is a winning square
    return (
      <button
        className={`square ${winningSquares ? "winning" : ""}`} // Add the "winning" class if the square is a winning square
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  // Define a function to render the game board using two loops
  const renderBoard = () => {
    const rows= [];
    for (let i = 0; i < 3; i++) { // Loop through the rows of the game board
      const squares = [];
      for (let j = 0; j < 3; j++) { // Loop through the columns of the game board
        squares.push(renderSquare(i * 3 + j)); // Render a square with the corresponding index
      }
      rows.push(<div className="board-row">{squares}</div>); // Add the squares to a row
    }
    return rows; // Return the rows of the game board
  };

  // Define a function to handle a click on a move in the move history list
  const jumpTo = (step) => {
    setStepNumber(step); // Update the step number to the selected step
    setPlayer(step % 2 === 0 ? "X" : "O"); // Update the current player based on the selected step
  };

  // Define a function to render the move history list
  const renderHistory = () => {
    const moves = history.map((step, move) => {
      const desc = move ? `${player=='X'?'O':'X'} played ${move} ${step.location}` : "Go to game start"; // Create the description for the move
      return (
        <li key={move}>
          <button className={`${move === stepNumber ? "selected" : ""}`} onClick={() => jumpTo(move)}>{desc}</button> {/* Add the "selected" class if the move is the current step */}
        </li>
      );
    });

    if (sortOrder === "desc") { // If the sort order is descending
      moves.reverse(); // Reverse the order of the moves
    }

    return (
      <div className="game-info " >
        <div>{winner ? `Winner: ${winner}` : `Next player: ${player}`}</div>
        <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>Sort {sortOrder === "asc" ? "Descending" : "Ascending"}</button> {/* Add a toggle button to change the sort order */}
        <ol>{moves}</ol>
      </div>
    );
  };

  // Render the game board and move history list
  return (
    <div className="game">
      <div className="game-board">{renderBoard()}</div>
      {renderHistory()}
    </div>
  );
}

export default App;