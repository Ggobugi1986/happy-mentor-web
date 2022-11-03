import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';

const PaperB = ({ children }) => {
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  return (
    isTransitionCompleted && (
      <div className="fixed inset-0 top-14 rounded-t-2xl bg-white z-50">
        {children}
      </div>
    )
  );
};

export default PaperB;
