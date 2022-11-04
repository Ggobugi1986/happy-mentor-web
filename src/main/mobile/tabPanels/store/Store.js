import React from 'react';
import { Footer } from 'ui/mobile';
import { Menu } from './components';
import { isBrowser } from 'react-device-detect';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

const Store = () => {
  const items = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col" style={{ paddingTop: 104 }}>
      {isBrowser ? (
        <div className="flex px-16 pt-16">
          <div className="w-96 h-80 mb-4">
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
                <SwiperSlide key={item}>
                  <div
                    style={{
                      backgroundImage: `url('/assets/items/${item}.jpg')`,
                    }}
                    className="h-80 bg-cover bg-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex-1 ml-4 px-4">
              <div className="mb-8">
                <div className="text-xl font-bold text-slate-900">
                  스트레스 토탈케어 솔루션 '희망과 용기'
                </div>
              </div>

              <div className="pl-4">
                <div className="text-lg font-semibold text-slate-900">
                  판매가
                </div>
                <div className="text-2xl font-semibold text-orange-500">
                  20,000원
                </div>
              </div>
            </div>
            <Menu />
          </div>
        </div>
      ) : (
        <>
          <div className="h-80 mb-4">
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
                <SwiperSlide key={item}>
                  <div
                    style={{
                      backgroundImage: `url('/assets/items/${item}.jpg')`,
                    }}
                    className="h-80 bg-cover bg-center"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="mb-4 px-4">
            <div className="mb-4">
              <div className="text-xl font-bold text-slate-900">
                스트레스 토탈케어 솔루션 '희망과 용기'
              </div>
            </div>

            <div className="text-lg font-semibold text-slate-900">판매가</div>
            <div className="text-2xl font-semibold text-orange-500">
              20,000원
            </div>
          </div>
          <Menu />
        </>
      )}

      <img src="/assets/items/detail.jpg" alt="" className="w-full" />
      <Footer />
    </div>
  );
};

export default Store;
