import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MakeSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        color='#0b4867'
        

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        
          
        }}
        pagination={{
          clickable: true,
          
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide className='bg-[#0b4867]'>
            <div className='w-[200px] h-[300px]'> 
            <img src="https://static.vecteezy.com/system/resources/previews/008/758/787/original/international-plastic-bag-free-day-say-no-to-plastic-save-nature-with-sad-globe-illustration-vector.jpg" alt="" />
            </div></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}
