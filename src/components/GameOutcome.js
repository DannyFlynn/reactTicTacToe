import React from "react";

function GameOutcome({ gameOutcome, gameReset, whoWon }) {
  return (
    <div className="messageWrap">
      <p className="message">
        {gameOutcome} &nbsp;
        {whoWon}
      </p>
      <button onClick={gameReset}>Play Again?</button>
    </div>
  );
}

export default GameOutcome;
