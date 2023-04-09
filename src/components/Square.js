import React from 'react';

function Square(props) {
    return (
      <button className="bg-[#F7BAC5] hover:bg-red-300 flex items-center justify-center shadow-md text-white w-[80px] h-[80px] rounded-md text-md" onClick={props.onClick}>
        {
            props.value == 'O' &&
            <img src='donut.png' className="w-12" />
        }
         {
            props.value == 'X' &&
            <img src='cat.png' className="w-12" />
        }
      </button>
    );
  }

export default Square;