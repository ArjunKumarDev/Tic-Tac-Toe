import React, { useEffect, useState } from "react";
import "./App.scss"
import InfoModal from "./Components/InfoModal";
import Square from "./Components/Square"
import { GamePattern } from "./GamePattern";


const initialBoardState = ["", "", "", "", "", "", "", "", ""]

const App = () => {

  const [board, setBoard] = useState(initialBoardState)

  const [currentPlayer, setCurrentPlayer] = useState("O")

  const [result, setResult] = useState({ winner: null, state: null })

  const [modalState, setModalState] = useState(false)


  useEffect(() => {

    findWinner();
    isGameTie();

    if (currentPlayer === "X") {
      setCurrentPlayer("O")
    } else {
      setCurrentPlayer("X")
    }
  }, [board])


  useEffect(() => {
    if (result.state !== null) {

      setModalState(true)

      setTimeout(() => {
        setModalState(false)
        resetGame();
      }, 6000)

    }
  }, [result])

  const chooseSquare = (square) => {

    if (board[square] === "") {
      setBoard(board.map((value, idx) => {
        if (idx === square && value === "") {
          return currentPlayer
        }
        return value
      }))
    }
  }

  const findWinner = () => {
    GamePattern.forEach((pattern) => {

      console.log(pattern[0])
      const player = board[pattern[0]]
      if (player === "") return;


      let foundWinner = true

      pattern.forEach((idx) => {
        if (board[idx] !== player) {
          foundWinner = false
        }
      })

      if (foundWinner) {
        setResult({ winner: currentPlayer, state: "Won" })
      }


    })
  }

  const isGameTie = () => {


    let squareFilled = true;

    board.forEach((square) => {
      if (square === "") {
        squareFilled = false;
      }
    })

    if (squareFilled) {
      setResult({ winner: "No one", state: "Tie" })
    }
  }

  const resetGame = () => {
    setBoard(initialBoardState)
    setCurrentPlayer("O")
    setResult({ winner: null, state: null })
  }



  return (
    <>
      <h1 className="title bd-container">Tic Tac Toe</h1>
      <h1 className="title bd-container">{`${currentPlayer} - Turn`}</h1>
      <div className="container bd-container">

        <div className="board">

          <div className="row">
            <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
            <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
            <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
          </div>

          <div className="row">
            <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
            <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
            <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
          </div>

          <div className="row">
            <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
            <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
            <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
          </div>

          <div className="reset__button">
            <a onClick={resetGame}>Reset Game</a>
          </div>

        </div>

        {modalState && <InfoModal visible={modalState} result={result} />}

      </div>
    </>
  )
}

export default App;
