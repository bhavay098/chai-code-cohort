import { useState } from "react";

/*
  All possible winning combinations.

  Each inner array represents indexes
  of the board that can create a win.

  Example:
  [0, 1, 2] => top row
*/
const winPatterns = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row

  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column

  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

function TicTacToe() {
  /*
    Stores board state.

    Example:
    [
      "X", "", "O",
      "", "X", "",
      "", "", "O"
    ]

    Initially all boxes are empty.
  */
  const [boxes, setBoxes] = useState(Array(9).fill(""));

  /*
    Keeps track of current turn.

    true  => O turn
    false => X turn
  */
  const [turnO, setTurnO] = useState(true);

  /*
    Stores winner or draw message.
  */
  const [winner, setWinner] = useState("");

  // Controls visibility of winner popup/message.

  const [showMessage, setShowMessage] = useState(false);

  // Prevents further moves once game ends.

  const [gameOver, setGameOver] = useState(false);

  // Runs whenever a player clicks a box.

  const handleClick = (index) => {
    /*
      Stop execution if:
      1. Box already contains X or O
      2. Game already ended
    */
    if (boxes[index] !== "" || gameOver) return;

    /*
      Create a copy of current board.

      React state should NEVER be modified directly.
    */
    const updatedBoxes = [...boxes];

    /*
      Place current player's symbol.

      If turnO is true:
      place "O"

      Else:
      place "X"
    */
    updatedBoxes[index] = turnO ? "O" : "X";

    //   Update board state.

    setBoxes(updatedBoxes);

    /*
      Switch player turn.

      true becomes false
      false becomes true
    */
    setTurnO(!turnO);

    //  Check if current move caused a winner.

    checkWinner(updatedBoxes);
  };

  // Checks all winning patterns.

  const checkWinner = (currentBoxes) => {
    // Loop through every win pattern.

    for (const pattern of winPatterns) {
      /*
        Extract indexes from pattern.

        Example:
        [0,1,2]
      */
      const [a, b, c] = pattern;

      /*
        Winning condition:

        1. Box should not be empty
        2. All 3 values should match
      */
      if (
        currentBoxes[a] !== "" &&
        currentBoxes[a] === currentBoxes[b] &&
        currentBoxes[b] === currentBoxes[c]
      ) {
        //  If winner found, show winner message.

        showWinner(currentBoxes[a]);

        return;
      }
    }

    /*
      Check if every box is filled.

      If yes and no winner exists,
      game becomes draw.
    */
    const allFilled = currentBoxes.every((box) => box !== "");

    if (allFilled) {
      showDraw();
    }
  };

  //  Displays winner message.

  const showWinner = (winnerValue) => {
    //  Set winner text.

    setWinner(`Congratulations, Winner is ${winnerValue}`);

    // Show popup/message container.

    setShowMessage(true);

    // Stop further gameplay.

    setGameOver(true);
  };

  // Displays draw message.

  const showDraw = () => {
    //  Set draw text.

    setWinner("It's a Draw!!");

    // Show message container.

    setShowMessage(true);

    // Stop game.

    setGameOver(true);
  };

  // Resets the entire game.

  const resetGame = () => {
    // Clear all board boxes.

    setBoxes(Array(9).fill(""));

    //  Start again with O turn.

    setTurnO(true);

    //  Clear winner text.

    setWinner("");

    // Hide popup/message.

    setShowMessage(false);

    //  Enable gameplay again.

    setGameOver(false);
  };

  return (
    /*
      Main wrapper container.

      Tailwind classes used for:
      - Full screen layout
      - Center alignment
      - Gradient background
      - Responsive spacing
    */
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#07131f] via-[#0b1f33] to-[#091827] px-5 py-10 text-white">
      {/* Decorative glowing background effect */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"></div>

      {/* Winner / Draw popup */}
      {showMessage && (
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
          {/* Winner text */}
          <p className="mb-4 text-center text-2xl font-bold text-emerald-300 md:text-4xl">
            {winner}
          </p>

          {/* Start new match button */}
          <button
            onClick={resetGame}
            className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-slate-900 transition hover:scale-105 hover:bg-emerald-300"
          >
            Start New Match
          </button>
        </div>
      )}

      {/* Game title */}
      <h1 className="mb-8 bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-6xl">
        Tic Tac Toe
      </h1>

      {/* Game board container */}
      <div className="grid w-full max-w-[460px] grid-cols-3 gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl shadow-2xl">
        {/* Loop through all board boxes */}
        {boxes.map((box, index) => (
          <button
            key={index}
            /*
              When clicked,
              call handleClick function
              with current box index.
            */
            onClick={() => handleClick(index)}
            /*
              Disable:
              1. Already clicked boxes
              2. Entire board after game ends
            */
            disabled={box !== "" || gameOver}
            /*
              Tailwind styles for:
              - Glassmorphism
              - Hover effects
              - Scaling animation
              - Gradient backgrounds
            */
            className="
              aspect-square
              rounded-3xl
              bg-gradient-to-br
              from-slate-800
              to-slate-950
              text-5xl
              font-extrabold
              text-white
              shadow-xl
              transition-all
              duration-200
              hover:-translate-y-1
              hover:scale-[1.03]
              hover:shadow-emerald-400/20
              disabled:cursor-not-allowed
            "
          >
            {/* Display X or O */}
            {box}
          </button>
        ))}
      </div>

      {/* Reset game button */}
      <button
        onClick={resetGame}
        className="
          mt-8
          rounded-full
          bg-emerald-400
          px-8
          py-4
          font-bold
          text-slate-900
          shadow-lg
          transition-all
          duration-200
          hover:-translate-y-1
          hover:scale-105
          hover:bg-emerald-300
        "
      >
        Reset Board
      </button>
    </div>
  );
}

export default TicTacToe;
