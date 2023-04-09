import React, { useState } from 'react';
import Board from './Board';
import ComputerPlayer from './ComputerPlayer';

const Game = ({ gameMode }) => {
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const handlePlayerMove = () => {
    setIsPlayerTurn(false);
  };

  const handleComputerMove = () => {
    setIsPlayerTurn(true);
  };
  const btnClick = () => {
    const game = document.querySelector('.game')
    const button = document.querySelector('.button')
    button.classList.remove('hidden')
    game.classList.add('hidden')
  }
  return (
    <div className='game hidden relative'>
        <i onClick={btnClick} className='z-50 cursor-pointer bx bxs-door-open absolute top-0 right-0 ease-out duration-100 hover:bg-red-200 hover:text-red-500 bg-white shadow-md rounded-full p-3 text-2xl text-black'></i>
      {gameMode === 0 ? (
        <div className="game">
          <div className="game-board">
            <Board isPlayerTurn={isPlayerTurn} onPlayerMove={handlePlayerMove} />
          </div>
        </div>
      ) : (
        <div className="game">
          <div className="game-board">
            <ComputerPlayer isPlayerTurn={isPlayerTurn} onComputerMove={handleComputerMove} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;