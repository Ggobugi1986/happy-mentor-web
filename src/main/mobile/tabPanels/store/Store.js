import React from 'react';
import { Menu } from './components';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

const Store = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      <div className="h-80">
        <Swiper
          className="h-full"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={true}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {items.map((item) => (
            <SwiperSlide>
              <div
                style={{
                  backgroundImage: `url('/assets/items/${item}.jpg')`,
                }}
                className="w-full h-80 bg-cover bg-center"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-4">
        <div className="text-xl font-bold text-slate-900">
          스트레스 토탈케어 솔루션 '희망과 용기'
        </div>
      </div>

      <Menu />

      <img src="/assets/items/detail.jpg" alt="" className="w-full" />
    </div>
  );
};

export default Store;
