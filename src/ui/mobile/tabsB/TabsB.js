// Import React
import React from 'react';

// Import Other Modules
import clsx from 'clsx';
import { motion } from 'framer-motion';

const TabsB = ({ activeTab, tabs, layoutId }) => {
  return (
    <motion.div
      className="relative h-12 flex pl-2 overflow-x-scroll opacity-0"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {tabs.map((tab) => (
        <div key={tab.id} className="flex-none relative flex items-center">
          <div className="px-2 py-1 rounded" onClick={tab.action}>
            <div
              className={clsx(
                'text-lg text-slate-900',
                tab.id !== activeTab && 'font-semibold',
                tab.id === activeTab && 'font-bold'
              )}
            >
              {tab.label}
            </div>
          </div>

          {tab.id === activeTab && (
            <motion.div
              className="absolute inset-x-2 bottom-0 h-1 rounded-sm bg-slate-900"
              layoutId={layoutId}
            />
          )}
        </div>
      ))}
      <div className="flex-none w-2" />
    </motion.div>
  );
};

export default TabsB;
