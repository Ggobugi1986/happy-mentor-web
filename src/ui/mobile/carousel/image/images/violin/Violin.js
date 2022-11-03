import React from 'react';
import { motion } from 'framer-motion';

const Violin = () => {
  return (
    <motion.div
      className="absolute opacity-0"
      style={{ right: -40, bottom: -40 }}
      animate={{ right: -20, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <img src="/assets/objects/violin.png" alt="" className="w-60" />
    </motion.div>
  );
};

export default Violin;
