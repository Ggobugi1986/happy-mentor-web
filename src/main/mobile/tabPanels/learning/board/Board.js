import React from 'react';
import { Carousel } from 'ui/mobile';

const Board = () => {
  const carouselProps = {
    slides: [
      {
        id: '67f3af55-9fcb-4045-bebc-9dcda843eb81',
        type: 'programs',
        category: 'learning1',
        title: ['AR/메타버스', '개념이해교육'],
        subtitle: '신나는 가상현실',
        image: 'vrHeadset',
        poster: 'cc9d6da0-b582-4bac-b2c1-36262fdab078.jpeg',
        backgroundColor: 'rgb(37 99 235)',
        isClosed: true,
      },
      {
        id: '9112d292-fd8c-4e2a-bd26-76de62ddf884',
        type: 'programs',
        category: 'learning1',
        title: ['평생교육실습생', '모집'],
        subtitle: '평생학습시대, 교육전문가의 길',
        image: 'graduation',
        poster: '324a1914-59e0-4c08-9489-f2e9178766fc.jpeg',
        backgroundColor: 'rgb(5 150 105)',
        isClosed: true,
      },
    ],
  };

  return (
    <div style={{ height: 240 }}>
      <Carousel {...carouselProps} />
    </div>
  );
};

export default Board;
