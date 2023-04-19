import React, { useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import LikeIcon from "../../assets/svgs/LikeIcon";
import LikeIconFilled from "../../assets/svgs/LikeIconFilled";
import AddComment from "../../assets/svgs/AddComment";
import SavePost from "../../assets/svgs/SavePost";
import SavePostFilled from "../../assets/svgs/SavePostFilled";
import HomeVideo from "../HomeVideo/HomeVideo";
import ChosenModalSkelton from "../Skeletons/ChosenModalSkelton/ChosenModalSkelton";
import ChosenPost from "../../pages/ChosenPost/ChosenPost";

const HomePost = ({ detail }) => {
   const [showPost, setShowPost] = useState(false);
   const [chosenDetail, setChosenDetail] = useState({});

   // console.log(detail);

   const showPostHandler = () => {
      setShowPost(true);
      setChosenDetail(detail);
   };

   return (
      <Wrapper>
         <Header>
            <HeaderImage src={detail?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${detail?.user?.profile_photo}` : noProfile} />
            <HeaderUsername to={`/profile/${detail?.user?.username}/posts`}>{detail?.user?.username}</HeaderUsername>
         </Header>
         <Body>
            <SwiperContainer slidesPerView={1} modules={[Navigation, Pagination]} navigation pagination>
               {detail?.files.map((media) => (
                  <SwiperSlideContainer key={media?.id}>
                     {({ isActive }) =>
                        isActive ? (
                           media?.extension === "video" ? (
                              !showPost && <HomeVideo videoSource={media?.page} />
                           ) : (
                              <Image src={`https://djangoinsta.pythonanywhere.com${media?.page}`} />
                           )
                        ) : (
                           <ChosenModalSkelton />
                        )
                     }
                  </SwiperSlideContainer>
               ))}
            </SwiperContainer>
         </Body>

         <FooterIcons>
            <LikeIconWrapper>{detail?.has_like ? <LikeIconFilled /> : <LikeIcon />}</LikeIconWrapper>

            <CommentIconWrapper onClick={showPostHandler}>
               <AddComment />
            </CommentIconWrapper>

            <SaveIconsWrapper>{detail?.has_save ? <SavePostFilled /> : <SavePost />}</SaveIconsWrapper>
         </FooterIcons>

         <LikesCount>{detail?.likes_count.toLocaleString()} likes</LikesCount>

         <Caption>{detail?.caption}</Caption>

         <ViewAllButton onClick={showPostHandler}>View all {detail?.comments_count} comments</ViewAllButton>

         {showPost && (
            <ChosenPost
               show={showPost}
               handleClose={() => {
                  setShowPost(false);
                  setChosenDetail({});
               }}
               chosenDetail={chosenDetail}
            />
         )}
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
   height: 50rem;

   @media (max-width: 900px) {
      height: 30rem;
   }
`;

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
   border-radius: 0.5rem;
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
   color: gray !important;
   margin-top: 2rem;
   cursor: pointer;
`;
