import { LoadingButton } from "@mui/lab";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";

const SuggestionItem = ({ detail, onClose }) => {
   return (
      <Wrapper>
         <Image src={detail?.profile_photo ? `https://djangoinsta.pythonanywhere.com/${detail?.profile_photo}` : noProfile} />
         <Details>
            <UserName to={`/profile/${detail?.username}/posts`} onClick={onClose}>
               {detail?.username}
            </UserName>
            {/* <Name>
               {detail?.name} 
            </Name> */}
         </Details>
         <RemoveButton variant="text" color="info" size="small" loading={false}>
            Follow
         </RemoveButton>
      </Wrapper>
   );
};

export default SuggestionItem;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
`;

const Image = styled.img`
   width: 3.1rem;
   height: 3.1rem;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const Details = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 1rem;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const UserName = styled(Link)`
   text-decoration: none;
   font-weight: 600;
   font-size: 1.2rem;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const Name = styled.p`
   font-size: 1.1rem;
   color: gray;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const RemoveButton = styled(LoadingButton)`
   margin-left: auto !important;
   font-size: 1.1rem !important;
   text-transform: none !important;
`;
