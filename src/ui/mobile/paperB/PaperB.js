// Import React
import React, { useContext } from 'react';

// Import Contexts
import { mobileLayoutContext } from 'contexts';

const PaperB = ({ children }) => {
  // Set UseContext Hooks
  const { isTransitionCompleted } = useContext(mobileLayoutContext);

  return (
    isTransitionCompleted && (
      <div className="fixed inset-0 top-14 bg-white z-50">{children}</div>
    )
  );
};

export default PaperB;
