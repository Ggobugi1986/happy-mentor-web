import React from 'react';
import { motion } from 'framer-motion';

const VR = () => {
  return (
    <motion.div
      className="absolute opacity-0"
      style={{ right: -40, bottom: -20 }}
      animate={{ right: -20, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <img src="/assets/objects/vrHeadset.png" alt="" className="w-64" />
    </motion.div>
  );
};

export default VR;
