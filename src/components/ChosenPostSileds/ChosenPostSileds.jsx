import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import testPhoto from "./../../assets/Images/testPhoto.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ChosenPostSileds = () => {
   return (
      <SwiperContainer slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination>
         <SwiperSlideContainer>
            <img src={testPhoto} />
         </SwiperSlideContainer>
         <SwiperSlideContainer>
            <img src={testPhoto} />
         </SwiperSlideContainer>
         <SwiperSlideContainer>
            <img src={testPhoto} />
         </SwiperSlideContainer>
         <SwiperSlideContainer>
            <img src={testPhoto} />
         </SwiperSlideContainer>
      </SwiperContainer>
   );
};

export default ChosenPostSileds;

const SwiperContainer = styled(Swiper)`
   height: 100%;
   width: 100%;

   .swiper-button-next,
   .swiper-button-prev {
      border-radius: 50%;
      width: 2.3rem;
      height: 2.3rem;
      background-color: #ffffffbe;
   }

   .swiper-button-next::after,
   .swiper-button-prev::after {
      font-size: 1rem;
      font-weight: 700;
      color: gray;
   }

   .swiper-button-disabled {
      visibility: hidden;
   }

   .swiper-pagination-bullet {
      background-color: gray;
      opacity: 0.5;
   }

   .swiper-pagination-bullet-active {
      background-color: white;
      opacity: 1;
      border: 0.1rem solid black;
   }
`;

const SwiperSlideContainer = styled(SwiperSlide)`
   height: 100%;
   width: 100%;

   img {
      height: 100%;
      width: 100%;
      object-fit: contain;
      object-position: center center;
   }
`;
