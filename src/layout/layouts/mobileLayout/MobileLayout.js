import React, { Suspense, useRef, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { mobileLayoutContext } from 'contexts';
import Main from 'main/mobile';
import { mobileRoutes } from 'routes';
import { motion } from 'framer-motion';

const MobileLayout = () => {
  const location = useLocation();

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
        className="fixed inset-0 overflow-x-hidden overflow-y-scroll"
        style={{
          backgroundColor:
            location.pathname === '/' ? '#FFFFFF' : 'rgb(15 23 42)',
        }}
        animate={{
          backgroundColor:
            location.pathname === '/' ? '#FFFFFF' : 'rgb(15 23 42)',
        }}
        transition={{ duration: 0.25 }}
      >
        <Main />
        <Suspense>{useRoutes(mobileRoutes)}</Suspense>

        {!isTransitionCompleted && (
          <motion.div
            className="fixed inset-x-0 bottom-0 rounded-t-2xl bg-white z-50"
            style={{
              top: transitionDirection === 'up' ? ref.current.clientHeight : 56,
            }}
            animate={{
              top: transitionDirection === 'up' ? 56 : ref.current.clientHeight,
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
