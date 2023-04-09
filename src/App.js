import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import { Helmet } from 'react-helmet';

function App() {
  const [mode, setMode] = useState(0);

  const btnClick = (i) => {
    setMode(i)
    const game = document.querySelector('.game')
    const button = document.querySelector('.button')
    button.classList.add('hidden')
    game.classList.remove('hidden')
  }

  return (
    <div className="App bg-kitten bg-cover bg-top h-screen w-full flex flex-col  items-center justify-center">
        <Helmet>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap" rel="stylesheet" />
        </Helmet>
        <div className="text-black flex items-center space-x-3 text-2xl py-5 font-bold font-poppins">
          <i class='animate-spin bx bxs-game'></i>
          <span class="relative flex overflow-hidden">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75">Ilhame Tic Tac Toe Game</span>
            <span class="relative inline-flex rounded-full">Ilhame Tic Tac Toe Game</span>
          </span> 
          <i class='animate-spin bx bxs-game'></i>
        </div>
      <div className="button grid font-roboto grid-cols-2 bg-red-100 py-5 px-14 space-x-3 shadow-md rounded-full">
        <button className='flex hover:bg-white hover:text-red-400 items-center justify-center space-x-2 py-2 px-5 rounded-full bg-red-400 text-white shadow-lg text-sm font-semibold' onClick={()=>btnClick(0)}>
          <i class='bx bx-group'></i>
          <span>Player vs. Player</span>
          </button>
        <button className='flex hover:bg-white hover:text-red-400 items-center justify-center space-x-2 py-2 px-5 rounded-full bg-red-400 text-white shadow-lg text-sm font-semibold' onClick={()=>btnClick(1)}>
         <i class='bx bx-laptop'></i>
          <span>Player vs. Computer</span>
        </button>
      </div>
      <Game gameMode={mode} />
    </div>
  );
}


export default App;