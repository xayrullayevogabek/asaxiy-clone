import React, { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Card from "../cards/banner-card";

import "swiper/css";
import "swiper/css/pagination";
import "./banner.css";

const images = [
  "https://assets.asaxiy.uz/uploads/banner/desktop/655c5b8688d3e.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/6566cc825d1a5.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/65438180a5810.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/653f8eb27e391.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/6569b38e37de1.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/6581552a20dbd.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/6566cbe7594df.jpg.webp",
  "https://assets.asaxiy.uz/uploads/banner/desktop/6569a3b5c5858.jpg.webp",
];

const Banner = () => {
    const swiperRef = useRef()
  return (
    <div className="banner-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper-container-image"
      >
        {images.map((item, indx) => (
          <SwiperSlide className="swiper-slide-image" key={indx}>
            <img src={item} alt="banner-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-container-card">
        <div className="swiper-navigation">
          <h3>Hafta Chegirmalari</h3>

          <div className="swiper-btns">
            <button onClick={() => swiperRef.current.slidePrev()} className="navigate-btn">
              <GrFormPrevious />
            </button>
            <button onClick={() => swiperRef.current.slideNext()} className="navigate-btn">
              <GrFormNext />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640:{
              slidesPerView:1,
              spaceBetween:10
            },
            641:{
              slidesPerView:3,
              spaceBetween:10
            },
            1284:{
              slidesPerView:3.5,
              spaceBetween:10
            }
          }}
          className="mySwiper swiper-slide-container"
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
        >
          {images.map((item, indx) => (
            <SwiperSlide className="swiper-card-slide" key={indx}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
