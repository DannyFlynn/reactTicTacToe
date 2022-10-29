import "./App.css";
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOutcome from "./components/GameOutcome";

function App() {
  //state
  const [gameBoard, setGameBoard] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [player, setPlayer] = useState("O");
  //when game is a draw or a win, outcome message will appear with changing isWinner to true as shown below
  const [isWinner, setIsWinner] = useState(false);
  //I want the winning message to say either O won or X
  const [whoWon, setWhoWon] = useState("");
  const [winnerMsg, setWinnerMsg] = useState("We have a winner and its ");

  const gameReset = () => {
    setGameBoard(["", "", "", "", "", "", "", "", ""]);
    setIsWinner(false);
    setPlayer("O");
    setWinnerMsg("We have a winner and its");
    setWhoWon("");
  };

  const whichPlayerWon = (gamePeice) => {
    gamePeice === "O" ? setWhoWon("O`s.") : setWhoWon("X`s.");
  };

  const draw = () => {
    setWhoWon("");
  };

  //game logic
  const winner = (copyBoard) => {
    if (
      (copyBoard[0] === "O" && copyBoard[1] === "O" && copyBoard[2] === "O") ||
      (copyBoard[0] === "X" && copyBoard[1] === "X" && copyBoard[2] === "X")
    ) {
      setPlayer("");
      //I am comparing what the value you so I can if o or x won.
      whichPlayerWon(copyBoard[0]);
      setIsWinner(true);
    } else if (
      (copyBoard[3] === "O" && copyBoard[4] === "O" && copyBoard[5] === "O") ||
      (copyBoard[3] === "X" && copyBoard[4] === "X" && copyBoard[5] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[3]);
      setIsWinner(true);
    } else if (
      (copyBoard[6] === "O" && copyBoard[7] === "O" && copyBoard[8] === "O") ||
      (copyBoard[6] === "X" && copyBoard[7] === "X" && copyBoard[8] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[6]);
      setIsWinner(true);
    } else if (
      (copyBoard[0] === "O" && copyBoard[3] === "O" && copyBoard[6] === "O") ||
      (copyBoard[0] === "X" && copyBoard[3] === "X" && copyBoard[6] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[0]);
      setIsWinner(true);
    } else if (
      (copyBoard[1] === "O" && copyBoard[4] === "O" && copyBoard[7] === "O") ||
      (copyBoard[1] === "X" && copyBoard[4] === "X" && copyBoard[7] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[1]);
      setIsWinner(true);
    } else if (
      (copyBoard[2] === "O" && copyBoard[5] === "O" && copyBoard[8] === "O") ||
      (copyBoard[2] === "X" && copyBoard[5] === "X" && copyBoard[8] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[2]);
      setIsWinner(true);
    } else if (
      (copyBoard[0] === "O" && copyBoard[4] === "O" && copyBoard[8] === "O") ||
      (copyBoard[0] === "X" && copyBoard[4] === "X" && copyBoard[8] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[0]);
      setIsWinner(true);
    } else if (
      (copyBoard[2] === "O" && copyBoard[4] === "O" && copyBoard[6] === "O") ||
      (copyBoard[2] === "X" && copyBoard[4] === "X" && copyBoard[6] === "X")
    ) {
      setPlayer("");
      whichPlayerWon(copyBoard[2]);
      setIsWinner(true);
    } else if (
      copyBoard[0] !== "" &&
      copyBoard[1] !== "" &&
      copyBoard[2] !== "" &&
      copyBoard[3] !== "" &&
      copyBoard[4] !== "" &&
      copyBoard[5] !== "" &&
      copyBoard[6] !== "" &&
      copyBoard[7] !== "" &&
      copyBoard[8] !== ""
    ) {
      setIsWinner(true);
      draw();
      setWinnerMsg("It`s a draw!!!");
    }
  };

  const choice = (move) => {
    if (gameBoard[move] === "") {
      let copyBoard = [...gameBoard];
      let choice = player === "O" ? "X" : "O";
      setPlayer(choice);
      copyBoard[move] = player;
      setGameBoard(copyBoard);
      winner(copyBoard);
    }
  };
  return (
    <div className="App">
      {isWinner === false ? (
        <GameBoard gameBoard={gameBoard} choice={choice} />
      ) : (
        <GameOutcome
          gameOutcome={winnerMsg}
          gameReset={gameReset}
          whoWon={whoWon}
        />
      )}
    </div>
  );
}

export default App;
