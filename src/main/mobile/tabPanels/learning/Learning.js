import React from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { LearningNews, PastPrograms, Programs } from './components';

const Learning = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <Board />
      <PaperA>
        <LearningNews />
        <Programs />
        <PastPrograms />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Learning;
