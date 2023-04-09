import React, { useState, useEffect } from 'react';
import Board from './Board';
import Square from './Square';

const ComputerPlayer = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const [difficulty, setDifficulty] = useState('Easy')


  useEffect(() => {
    
    if (player === 'O' && isComputerTurn) {
      const availableSquares = board.reduce((acc, curr, index) => {
        if (!curr) acc.push(index);
        return acc;
      }, []);

      const randomIndex = Math.floor(Math.random() * availableSquares.length);
      const squareIndex = availableSquares[randomIndex];

      const newBoard = [...board];
      newBoard[squareIndex] = player;

      setBoard(newBoard);
      setPlayer('X');
      setIsComputerTurn(false);
    }
  }, [isComputerTurn]);

  useEffect(() => {
    const checkWinner = () => {
      const lines = [        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          setWinner(board[a]);
          return;
        }
      }
      if (!board.includes(null)) setWinner('tie');
    };

    checkWinner();
    if (player === 'O') {
      setIsComputerTurn(true);
    }
  }, [board]);

  const handleClick = (i) => {
    const newBoard = [...board];
    if (winner || newBoard[i]) return;
    newBoard[i] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');

  };
  


  const checkWinner = () => {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (!board.includes(null)) setWinner('tie');
  };

  React.useEffect(() => {
    checkWinner();
  }, [board]);

  const renderSquare = (i) => (
    <Square value={board[i]} onClick={() => handleClick(i)} />
  );

  const renderStatus = () => {
    if (winner) {
        if (winner === 'tie') 
        {
          return 'Match nul !';
        }
        else if( winner == 'O')
        {
          return <img src='donut.png' className="w-12" />
        }
        else if(winner == 'X')
        {
          return <img src='cat.png' className="w-12" />
        }
    }
    if(player =="O")
    {
        return <img src='donut.png' className="w-12" />
    }
    else{
        return <img src='cat.png' className="w-12" />
      }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setPlayer('X');
    setWinner(null);
  };

  return (

    <div className="relative">
          {/* {difficulty} */}
        <div className="grid grid-cols-1 absolute -left-20 space-y-5 top-1/3">
            {
                difficulty != 'Easy' ?
                <button className='bg-red-700 text-white text-xs py-1 px-3 rounded' onClick={()=>setDifficulty('Easy')}>Easey</button>
                :
                <button className='bg-white font-bold text-red-700 text-xs py-1 px-3 rounded' onClick={()=>setDifficulty('Easy')}>Easey</button>
            }
            {
                difficulty != 'Normal' ?
                <button className='bg-red-700 text-white text-xs py-1 px-3 rounded' onClick={()=>setDifficulty('Normal')}>Normal</button>
                :
                <button className='bg-white font-bold text-red-700 text-xs py-1 px-3 rounded' onClick={()=>setDifficulty('Normal')}>Normal</button>
            }
            {
                difficulty != 'Hard' ?
                <button className='bg-red-700 text-white text-xs py-1 px-3 rounded' onClick={()=>setDifficulty('Hard')}>Hard</button>
                :
                <button className='bg-white font-bold text-red-700 text-xs py-1 px-3 rounded' onClick={()=>setDifficulty('Hard')}>Hard</button>
            }
        </div>
      <div className="text-[#001022] font-poppins font-bold text-sm flex item-center justify-center py-3 my-5 bg-p1 shadow-md bg-cover rounded w-full ">
        {
            winner == "O"
            &&
            <span className="h-12 flex items-center">The Winner is</span>
        }
         {
            winner == "X"
            &&
            <span className="h-12 flex items-center">The Winner is</span>
        }
        {
            winner == null && 
            <span className="h-12 flex items-center">Turn Of</span>
        }

        {
        renderStatus()
        }
    </div>
    <div className="flex flex-col space-y-3 bg-game bg-cover shadow-md rounded p-8">
        <div className="flex items-center space-x-3">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="flex items-center space-x-3">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="flex items-center space-x-3">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
      <button className="bg-p3 py-2 shadow-md rounded font-bold bg-cover my-3 w-full text-white" onClick={handleRestart}>New Game</button>
    </div>
  );
};

export default ComputerPlayer;