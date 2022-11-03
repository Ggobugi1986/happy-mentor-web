import React from 'react';
import { Footer, PaperA } from 'ui/mobile';
import Board from './board';
import { EventNews, PastEvents } from './components';

const Event = () => {
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <Board />
      <PaperA>
        <EventNews />
        <PastEvents />
        <Footer />
      </PaperA>
    </div>
  );
};

export default Event;
