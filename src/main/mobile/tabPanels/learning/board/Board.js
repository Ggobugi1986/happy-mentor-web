import React, { useContext } from 'react';
import { mobileLayoutContext } from 'contexts';
import { Carousel } from 'ui/mobile';

const Board = () => {
  const { boardHeight } = useContext(mobileLayoutContext);

  const carouselProps = {
    slides: [
      {
        id: 0,
        type: 'learning',
        title: ['AR/메타버스', '개념이해교육'],
        subtitle: '신나는 가상현실',
        image: 'vrHeadset',
        poster: '18ebc080-8c94-4092-a309-1869db77d9ea.jpeg',
        backgroundColor: 'rgb(37 99 235)',
        isOpen: false,
      },
      {
        id: 1,
        type: 'learning',
        title: ['평생교육실습생', '모집'],
        subtitle: '평생학습시대, 교육전문가의 길',
        image: 'graduation',
        poster: '8d7f1359-ab28-4ee1-8512-ed99299a82a0.png',
        backgroundColor: 'rgb(13 148 136)',
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
