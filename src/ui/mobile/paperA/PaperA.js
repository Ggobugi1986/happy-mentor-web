import React from 'react';
import clsx from 'clsx';
import { isBrowser } from 'react-device-detect';

const PaperA = ({ children }) => {
  return (
    <div
      className={clsx(
        'flex-1 rounded-t-2xl bg-white pt-4',
        isBrowser && 'px-16'
      )}
    >
      {children}
    </div>
  );
};

export default PaperA;
