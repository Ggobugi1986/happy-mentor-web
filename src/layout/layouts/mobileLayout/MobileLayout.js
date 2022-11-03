import React, { Suspense, useRef, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { mobileLayoutContext } from 'contexts';
import Main from 'main/mobile';
import { mobileRoutes } from 'routes';
import { motion } from 'framer-motion';

const MobileLayout = () => {
  const [transitionDirection, setTransitionDirection] = useState('up');
  const [isTransitionCompleted, setIsTransitionCompleted] = useState(true);

  const ref = useRef({
    clientWidth: 0,
    clientHeight: 0,
    scrollTop: 0,
  });

  const value = {
    clientWidth: ref.current.clientWidth,
    clientHeight: ref.current.clientHeight,

    boardHeight: ((ref.current.clientWidth - 24) / 3) * 2 + 24,

    transitionDirection,
    setTransitionDirection,
    isTransitionCompleted,
    setIsTransitionCompleted,
  };

  return (
    <mobileLayoutContext.Provider value={value}>
      <motion.div
        ref={ref}
        className="fixed inset-0 overflow-x-hidden overflow-y-scroll bg-white"
      >
        <Main />
        <Suspense>{useRoutes(mobileRoutes)}</Suspense>

        {!isTransitionCompleted && (
          <motion.div
            className="fixed inset-x-0 bottom-0 bg-white z-50"
            style={{
              top:
                transitionDirection === 'up'
                  ? 56 + 48 + value.boardHeight - ref.current.scrollTop
                  : 56,
            }}
            animate={{
              top:
                transitionDirection === 'up'
                  ? 56
                  : 56 + 48 + value.boardHeight - ref.current.scrollTop,
            }}
            transition={{ duration: 0.25 }}
            onAnimationComplete={() => setIsTransitionCompleted(true)}
          />
        )}
      </motion.div>
    </mobileLayoutContext.Provider>
  );
};

export default MobileLayout;
