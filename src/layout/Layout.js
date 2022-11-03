import React from 'react';
import { layoutContext } from 'contexts';
import { DesktopLayout, MobileLayout } from './layouts';
import { isBrowser } from 'react-device-detect';

const Layout = () => {
  const value = {};

  return (
    <layoutContext.Provider value={value}>
      {isBrowser ? <DesktopLayout /> : <MobileLayout />}
    </layoutContext.Provider>
  );
};

export default Layout;
