import React from 'react';
import Layout from 'layout';
import System from 'system';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  console.log(uuidv4());

  return (
    <System>
      <Layout />
      <div className="text-white">learn react</div>
    </System>
  );
};

export default App;
