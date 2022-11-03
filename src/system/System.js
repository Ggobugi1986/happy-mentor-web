import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { systemContext } from 'contexts';
import store from 'store';

const System = ({ children }) => {
  const [appBarTitle, setAppBarTitle] = useState('');

  const value = { appBarTitle, setAppBarTitle };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <systemContext.Provider value={value}>
          {children}
        </systemContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

export default System;
