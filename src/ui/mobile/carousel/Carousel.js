import React from 'react';
import Image from './image';
import { useLinkClick } from 'hooks/mobile';
import clsx from 'clsx';
import { isBrowser } from 'react-device-detect';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

const Carousel = ({ slides }) => {
  const handleLinkClick = useLinkClick();

  return (
    <Swiper
      className="h-full"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={true}
      modules={[Autoplay, Pagination]}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="h-full"
            style={{ backgroundColor: slide.backgroundColor }}
            onClick={() =>
              handleLinkClick(
                `/${slide.type}/${slide.category}/${slide.id}`,
                '프로그램',
                'up'
              )
            }
          >
            <div
              className={clsx(
                'absolute top-8',
                isBrowser ? 'left-16' : 'left-4'
              )}
            >
              <div className="flex mb-3 space-x-2">
                <div className="h-6 flex items-center px-3 rounded-full bg-white">
                  <div className="text-sm font-semibold text-slate-900">
                    {slide.category === 'learning1' && '배움'}
                  </div>
                </div>

                {slide.isClosed && (
                  <div className="h-6 flex items-center px-3 rounded-full bg-pink-500">
                    <div className="text-sm font-semibold text-white">
                      모집 완료
                    </div>
                  </div>
                )}
              </div>

              {isBrowser ? (
                <div className="mb-2">
                  <div className="text-2xl font-bold text-white">
                    {slide.title[0]} {slide.title[1]}
                  </div>
                </div>
              ) : (
                <div className="mb-2">
                  <div className="text-2xl font-bold text-white">
                    {slide.title[0]}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {slide.title[1]}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <div className="font-semibold text-white">{slide.subtitle}</div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-sm font-semibold text-white">더보기</div>
                <HiOutlineArrowNarrowRight className="text-white" />
              </div>
            </div>

            {isBrowser ? (
              <div className="absolute inset-0 right-16">
                <img
                  src={`assets/posters/${slide.category}/${slide.poster}`}
                  alt=""
                  className="absolute top-8 right-4 w-32"
                />

                {slide.image && <Image image={slide.image} />}
              </div>
            ) : (
              <>
                <img
                  src={`assets/posters/${slide.category}/${slide.poster}`}
                  alt=""
                  className="absolute top-8 right-4 w-32"
                />

                {slide.image && <Image image={slide.image} />}
              </>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
