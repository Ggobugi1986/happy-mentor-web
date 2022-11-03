import React from 'react';
import { motion } from 'framer-motion';

const Graduation = () => {
  return (
    <motion.div
      className="absolute opacity-0"
      style={{ right: 0, bottom: -20 }}
      animate={{ right: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <img src="/assets/objects/graduation.png" alt="" className="w-48" />
    </motion.div>
  );
};

export default Graduation;
