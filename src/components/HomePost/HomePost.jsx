import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import testPhoto from "./../../assets/Images/long.png";
import testPhoto2 from "./../../assets/Images/csm.jpg";
import testPhoto3 from "./../../assets/Images/NoProfilePhoto.jpg";
import testPhoto4 from "./../../assets/Images/testPhoto.png";
import testPhoto5 from "./../../assets/Images/gfdfdg.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import LikeIcon from "../../assets/svgs/LikeIcon";
import LikeIconFilled from "../../assets/svgs/LikeIconFilled";
import AddComment from "../../assets/svgs/AddComment";
import SavePost from "../../assets/svgs/SavePost";
import SavePostFilled from "../../assets/svgs/SavePostFilled";

const HomePost = () => {
   return (
      <Wrapper>
         <Header>
            <HeaderImage src={testPhoto4} />
            <HeaderUsername>javad_googool</HeaderUsername>
         </Header>
         <Body>
            <SwiperContainer slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination>
               <SwiperSlideContainer>{({ isActive }) => (isActive ? <img src={testPhoto2} /> : <div> some </div>)}</SwiperSlideContainer>
               <SwiperSlideContainer>{({ isActive }) => (isActive ? <img src={testPhoto} /> : <div> some </div>)}</SwiperSlideContainer>
               <SwiperSlideContainer>{({ isActive }) => (isActive ? <img src={testPhoto3} /> : <div> some </div>)}</SwiperSlideContainer>
               <SwiperSlideContainer>{({ isActive }) => (isActive ? <img src={testPhoto4} /> : <div> some </div>)}</SwiperSlideContainer>
               <SwiperSlideContainer>{({ isActive }) => (isActive ? <img src={testPhoto5} /> : <div> some </div>)}</SwiperSlideContainer>
            </SwiperContainer>
         </Body>

         <FooterIcons>
            <LikeIconWrapper>
               <LikeIcon />
               {/* <LikeIconFilled /> */}
            </LikeIconWrapper>

            <CommentIconWrapper>
               <AddComment />
            </CommentIconWrapper>

            <SaveIconsWrapper>
               <SavePost />
               {/* <SavePostFilled /> */}
            </SaveIconsWrapper>
         </FooterIcons>

         <LikesCount>12,215 likes</LikesCount>

         <Caption>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates corrupti recusandae, magnam consequatur, vitae cupiditate
            quam eligendi odit ratione natus minima ullam laborum incidunt, debitis sunt fugiat alias eaque!
         </Caption>

         <ViewAllButton>View all 8 comments</ViewAllButton>
      </Wrapper>
   );
};

export default HomePost;

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   border-bottom: 0.1rem solid var(--border-color);
   padding-bottom: 3rem;
`;

const Header = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 1rem;
`;

const HeaderImage = styled.img`
   width: 3.2rem;
   height: 3.2rem;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const HeaderUsername = styled(Link)`
   text-decoration: none;
   font-weight: 600;
   font-size: 1.3rem;
`;

const Body = styled.div`
   width: 100%;
`;

const SwiperContainer = styled(Swiper)`
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
   width: 100%;

   img {
      width: 100%;
      max-height: 60rem;
      object-fit: contain;
      object-position: center center;
      border-radius: 0.5rem;
   }
`;

const FooterIcons = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   margin-top: 1rem;

   svg {
      cursor: pointer;
   }
`;

const LikeIconWrapper = styled.div``;

const CommentIconWrapper = styled.div``;

const SaveIconsWrapper = styled.div`
   margin-left: auto;
`;

const LikesCount = styled.p`
   font-size: 1.2rem;
   margin-top: 0.5rem;
   font-weight: 600;
`;

const Caption = styled.p`
   font-size: 1.3rem;
   margin-top: 1rem;
`;

const ViewAllButton = styled.button`
   display: block;
   background-color: transparent;
   border: none;
   width: fit-content;
   font-size: 1.2rem;
   font-weight: 700;
   color: gray;
   margin-top: 2rem;
   cursor: pointer;
`;
