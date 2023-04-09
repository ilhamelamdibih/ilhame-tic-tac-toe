import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

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
    <div className="">
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

export default Board;