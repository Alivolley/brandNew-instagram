import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";

const SearchItem = ({ detail, onClose, templateTheme }) => {
   return (
      <Wrapper templateTheme={templateTheme}>
         <Image src={detail?.profile_photo ? `https://djangoinsta.pythonanywhere.com${detail?.profile_photo}` : noProfile} />
         <Details>
            <UserName to={`/profile/${detail?.username}/posts`} onClick={onClose}>
               {/* {detail?.username} */}
               ali azghandi
            </UserName>
            <Explain>
               {/* {detail?.name} */}
               ali agha
            </Explain>
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

const Image = styled.img`
   width: 4.4rem;
   height: 4.4rem;
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
`;

const UserName = styled(Link)`
   text-decoration: none;
   font-weight: 600;
   font-size: 1.5rem;
   max-width: 100%;
`;

const Explain = styled.p`
   font-size: 1.4rem;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;
