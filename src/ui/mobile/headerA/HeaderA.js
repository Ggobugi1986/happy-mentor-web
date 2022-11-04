import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { systemContext } from 'contexts';
import { motion } from 'framer-motion';

const HeaderA = () => {
  const location = useLocation();

  const { appBarTitle } = useContext(systemContext);

  return (
    <motion.div
      className="fixed inset-x-0 top-0 h-14 flex items-center px-2 z-50 max-w-4xl mx-auto"
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
      <div className="w-10 h-10" />
      <div className="flex-1 flex justify-center px-2">
        <motion.div
          className="text-lg font-bold"
          style={{
            color:
              location.pathname === '/' ? 'rgb(15 23 42)' : 'rgb(241 245 249)',
            opacity: 0,
          }}
          animate={{
            color:
              location.pathname === '/' ? 'rgb(15 23 42)' : 'rgb(241 245 249)',
            opacity: 1,
          }}
          transition={{ duration: 0.25 }}
        >
          {appBarTitle}
        </motion.div>
      </div>
      <div className="w-10 h-10" />
    </motion.div>
  );
};

export default HeaderA;
