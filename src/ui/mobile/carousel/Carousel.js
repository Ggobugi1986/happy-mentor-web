import React from 'react';
import Image from './image';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './swiper.css';

const Carousel = ({ slides }) => {
  return (
    <Swiper
      className="h-full"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
    >
      {slides.map((slide) => (
        <SwiperSlide>
          <div
            className="h-full"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <motion.div
              className="absolute top-8 left-0 opacity-0"
              animate={{ left: 16, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex mb-3 space-x-2">
                <div className="h-6 flex items-center px-3 rounded-full bg-white">
                  <div className="text-sm font-semibold text-slate-900">
                    배움
                  </div>
                </div>

                <div className="h-6 flex items-center px-3 rounded-full bg-pink-500">
                  <div className="text-sm font-semibold text-white">
                    모집 완료
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <div className="text-2xl font-bold text-white">
                  {slide.title[0]}
                </div>
                <div className="text-2xl font-bold text-white">
                  {slide.title[1]}
                </div>
              </div>

              <div className="mb-4">
                <div className="font-semibold text-white">{slide.subtitle}</div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="text-sm font-semibold text-white">더보기</div>
                <HiOutlineArrowNarrowRight className="text-white" />
              </div>
            </motion.div>

            <img
              src={require(`assets/${slide.type}Posters/${slide.poster}`)}
              alt=""
              className="absolute top-8 right-4 w-32"
            />

            {slide.image && <Image image={slide.image} />}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
