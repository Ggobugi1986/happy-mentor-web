import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';

const Board = () => {
  const { boardHeight } = useContext(mobileLayoutContext);

  return (
    <div
      className="flex-none flex items-center justify-center bg-gray-50"
      style={{ height: boardHeight }}
    >
      <img src="/assets/logos/logo1.png" alt="" className="w-60" />
    </div>
  );
};

export default Board;
