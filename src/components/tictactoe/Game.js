import React, { useReducer, useState } from "react";
import { calculateWinner } from "../../helpers";
import Board from "./Board";
import "./GameStyles.css";

const arrayDefault = Array(9).fill(null);
const initialState = {
  board: arrayDefault,
  xIsNext: true,
};

// immutable : không thể chỉnh sửa
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const resetState = JSON.parse(JSON.stringify(state));
      resetState.board = arrayDefault;
      return resetState;
    }
    default:
      break;
  }
  return state;
};

const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // const [state, setState] = useState({});
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];

    // Nếu có người chiến thắng hoặc đã nhấn rồi -> không cho thao tác tiếp nữa
    if (winner || boardCopy[index]) return state;

    dispatch({
      type: "CLICK",
      payload: { index, winner },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
