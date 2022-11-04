import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { isBrowser } from 'react-device-detect';

const PaperB = ({ children }) => {
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  return (
    isTransitionCompleted && (
      <div className="fixed inset-0 top-14 rounded-t-2xl bg-white z-50 max-w-4xl mx-auto">
        {isBrowser ? (
          <div className="absolute inset-0 left-16 right-16">{children}</div>
        ) : (
          <>{children}</>
        )}
      </div>
    )
  );
};

export default PaperB;
