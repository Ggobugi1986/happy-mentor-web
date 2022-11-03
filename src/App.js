import React from 'react';
import Layout from 'layout';
import System from 'system';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  console.log(uuidv4());

  return (
    <System>
      <Layout />
    </System>
  );
};

export default App;
