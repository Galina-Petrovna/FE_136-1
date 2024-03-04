import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import style from "./Slider.module.css";

import slider_1 from "../../assets/slides/1_slide.jpg";
import slider_2 from "../../assets/slides/2_slide.jpg";
import slider_3 from "../../assets/slides/3_slide.jpg";
import slider_4 from "../../assets/slides/4_slide.jpg";
import slider_5 from "../../assets/slides/5_slide.jpg";



// import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/swiper-bundle.css';
import React from 'react';


const Slider = () => {
    
    return (
      <>
      <Swiper className={style.swiper}
        cssMode={true}
        navigation={true}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
       
      >
        <SwiperSlide className={style.swiperSlide}><img className={style.img} src={slider_1} alt="" /></SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img className={style.img} src={slider_2} alt="" /></SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img className={style.img} src={slider_3} alt="" /></SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img className={style.img} src={slider_4} alt="" /></SwiperSlide>
        <SwiperSlide className={style.swiperSlide}><img className={style.img} src={slider_5} alt="" /></SwiperSlide>
       
      </Swiper>
    </>
      );


}

export default Slider;