import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";

const SearchItem = ({ detail, onClose, templateTheme }) => {
   return (
      <Wrapper templateTheme={templateTheme}>
         <ImageWrapper to={`/profile/${detail?.username}/posts`}>
            <Image src={detail?.profile_photo ? `https://djangoinsta.pythonanywhere.com${detail?.profile_photo}` : noProfile} />
         </ImageWrapper>
         <Details>
            <UserName to={`/profile/${detail?.username}/posts`} onClick={onClose}>
               {detail?.username}
            </UserName>
            <Explain>{detail?.name}</Explain>
         </Details>
      </Wrapper>
   );
};

export default SearchItem;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }
`;

const ImageWrapper = styled(Link)`
   width: 4.4rem;
   height: 4.4rem;
   text-decoration: none;

   @media (max-width: 900px) {
      width: 3rem;
      height: 3rem;
   }
`;

const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const Details = styled.div`
   display: flex;
   flex-direction: column;
   gap: 0.7rem;
   margin-left: 1rem;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

   @media (max-width: 900px) {
      gap: 0.2rem;
   }
`;

const UserName = styled(Link)`
   text-decoration: none;
   font-weight: 600;
   font-size: 1.5rem;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

   @media (max-width: 900px) {
      font-size: 1.3rem;
   }
`;

const Explain = styled.p`
   font-size: 1.4rem;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;

   @media (max-width: 900px) {
      font-size: 1.1rem;
   }
`;
