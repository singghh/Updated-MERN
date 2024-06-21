import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';


import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Swiper1() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/src/assets/pjpeg.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i2-prod.mirror.co.uk/incoming/article11589597.ece/ALTERNATES/s1227b/This-Hand-Out-photo-shows-plastic-waste.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.wagwalkingweb.com/media/care/hero/1654534515.4420464/how-microplastics-can-affect-your-dogs-and-cats.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.genevaenvironmentnetwork.org/wp-content/uploads/2020/11/2019_0520-plastic-pollution-aspect-ratio-2000-1200-1024x614.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}
