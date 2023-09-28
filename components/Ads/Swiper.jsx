import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { moviesBg } from "@/data/Carousel";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={10}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className=" block h-52"
      >
        {moviesBg.map((m) => (
          <div className=" bg-red-500 w-32">
            <SwiperSlide key={m.id}> 
              <img src={m.src} alt={m.title} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
