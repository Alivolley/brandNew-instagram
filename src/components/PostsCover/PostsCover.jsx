import React, { useRef, useState } from "react";
import styled from "styled-components";
import testPhoto from "./../../assets/Images/testPhoto.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import MultyplyPosts from "./../../assets/svgs/MultyplyPosts";
import IsVideoIcon from "./../../assets/svgs/IsVideoIcon";

const PostsCover = () => {
   const [containerHeight, setContainerHeight] = useState();
   const containerRef = useRef();

   if (containerRef.current) {
      const observer = new ResizeObserver((entries) => setContainerHeight(entries[0].contentRect.width));
      observer.observe(containerRef.current);
   }

   return (
      <Wrapper containerHeight={containerHeight} onLoad={(e) => setContainerHeight(e.target.width)} ref={containerRef}>
         <IconWrapper>
            <MultyplyPosts />
            {/* <IsVideoIcon /> */}
         </IconWrapper>
         <ImageCover src={testPhoto} />
         <CoverShadow className="shadow-color">
            <LikesCount>
               <FavoriteIcon fontSize="large" />
               25
            </LikesCount>
            <CommentsCount>
               <ModeCommentIcon fontSize="large" />
               389
            </CommentsCount>
         </CoverShadow>
      </Wrapper>
   );
};

export default PostsCover;

const Wrapper = styled.div`
   width: 100%;
   position: relative;
   height: ${({ containerHeight }) => `${containerHeight}px`};
   cursor: pointer;

   &:hover .shadow-color {
      display: flex;
   }
`;

const ImageCover = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center center;
`;

const IconWrapper = styled.div`
   position: absolute;
   right: 0.5rem;
   top: 0.5rem;
   width: 2.3rem;
   width: 2.3rem;

   @media (max-width: 600px) {
      right: 0.15rem;
      top: 0.15rem;
      width: 1.5rem;
      height: 1.5rem;
   }
`;

const CoverShadow = styled.div`
   position: absolute;
   display: none;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.4);
   justify-content: center;
   align-items: center;
   gap: 2.5rem;

   @media (max-width: 600px) {
      gap: 1rem;
   }
`;

const LikesCount = styled.div`
   color: white;
   font-weight: 700;
   display: flex;
   align-items: center;
   gap: 1rem;

   @media (max-width: 600px) {
      gap: 0;
      font-size: 1rem;

      svg {
         font-size: 1rem;
      }
   }
`;

const CommentsCount = styled(LikesCount)``;
