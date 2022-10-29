import React from "react";

function GameBoard({ gameBoard, choice }) {
  return (
    <div className="game-wrap">
      <div className="flex topl" onClick={() => choice(0)}>
        {gameBoard[0]}
      </div>
      <div className="flex topm" onClick={() => choice(1)}>
        {gameBoard[1]}
      </div>
      <div className="flex topr" onClick={() => choice(2)}>
        {gameBoard[2]}
      </div>
      <div className="flex midl" onClick={() => choice(3)}>
        {gameBoard[3]}
      </div>
      <div className="flex midm" onClick={() => choice(4)}>
        {gameBoard[4]}
      </div>
      <div className="flex midr" onClick={() => choice(5)}>
        {gameBoard[5]}
      </div>
      <div className="flex botl" onClick={() => choice(6)}>
        {gameBoard[6]}
      </div>
      <div className="flex botm" onClick={() => choice(7)}>
        {gameBoard[7]}
      </div>
      <div className="flex botr" onClick={() => choice(8)}>
        {gameBoard[8]}
      </div>
    </div>
  );
}

export default GameBoard;
