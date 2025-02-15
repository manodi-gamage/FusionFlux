import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Optional: Navigation styles
import "swiper/css/pagination"; // Optional: Pagination styles
import "./Css/Slider.css"; // Custom styles
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.webp';

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]} // Add navigation and pagination modules
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides visible at a time
        navigation // Enable navigation (arrows)
        pagination={{ clickable: true }} // Enable pagination (dots)
      >
        {/* Add your slides here */}
        <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
