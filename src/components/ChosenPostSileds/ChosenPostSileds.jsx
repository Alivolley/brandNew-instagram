import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PostVideo from "../PostVideo/PostVideo";

const ChosenPostSileds = ({ medias }) => {
   // console.log(medias);

   return (
      <SwiperContainer slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination>
         {medias?.map((media) => (
            <SwiperSlideContainer key={media?.id}>
               {({ isActive }) =>
                  isActive &&
                  (media?.extension === "video" ? (
                     <PostVideo videoSource={media?.page} />
                  ) : (
                     <Image src={`https://djangoinsta.pythonanywhere.com${media?.page}`} />
                  ))
               }
            </SwiperSlideContainer>
         ))}
      </SwiperContainer>
   );
};

export default ChosenPostSileds;

const SwiperContainer = styled(Swiper)`
   width: 100%;
   height: 100%;

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
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Image = styled.img`
   max-width: 100%;
   max-height: 100%;
   object-fit: contain;
   object-position: center center;
`;
