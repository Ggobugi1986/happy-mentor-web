import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLinkClick } from 'hooks/mobile';
import { changeActiveTab } from 'store/slices/uiSlice';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const TabsA = ({ activeTab, tabs, layoutId }) => {
  const location = useLocation();

  const handleLinkClick = useLinkClick();

  const dispatch = useDispatch();

  return (
    <motion.div
      className="fixed inset-x-0 top-14 h-12 border-b border-slate-300 z-50"
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
      <img
        src="/assets/logos/logo2.png"
        alt=""
        className="fixed top-3 left-2 w-60"
        onClick={() => {
          dispatch(changeActiveTab('now'));
          handleLinkClick(
            '/',
            '해피멘토협동조합',
            location.pathname !== '/' && 'down'
          );
        }}
      />

      <div className="h-full flex justify-between pr-2 pl-10">
        {tabs.map((tab) => (
          <div key={tab.id} className="relative flex items-center">
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
      </div>
    </motion.div>
  );
};

export default TabsA;
