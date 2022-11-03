import React from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { Articles, Menu, Partners } from './components';

const About = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <Board />
      <PaperA>
        <Menu />
        <Articles />
        <Partners />
        <Footer />
      </PaperA>
    </div>
  );
};

export default About;
