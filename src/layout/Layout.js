import React from 'react';
import { layoutContext } from 'contexts';
import { MobileLayout } from './layouts';
import { isBrowser } from 'react-device-detect';

const Layout = () => {
  const value = {};

  return (
    <layoutContext.Provider value={value}>
      <div className="fixed absolute inset-0 bg-slate-100" />
      {isBrowser ? <MobileLayout /> : <MobileLayout />}
    </layoutContext.Provider>
  );
};

export default Layout;
