import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { Carousel } from 'ui/mobile';

const Board = () => {
  const { boardHeight } = useContext(mobileLayoutContext);

  const carouselProps = {
    slides: [
      {
        id: 0,
        type: 'event',
        title: ['2022 화성시', '청소년 진로박람회'],
        subtitle: '꿈 내게로 스며들다',
        poster: '5f09e65d-6d45-4b19-ad82-ec1e9925cf98.jpeg',
        backgroundColor: 'rgb(37 99 235)',
        isOpen: false,
      },
    ],
  };

  return (
    <div style={{ height: boardHeight }}>
      <Carousel {...carouselProps} />
    </div>
  );
};

export default Board;
