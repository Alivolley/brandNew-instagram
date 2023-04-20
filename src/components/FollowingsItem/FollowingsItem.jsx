import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import useFollow from "../../api/follow/useFollow";
import { Button } from "@mui/material";

const FollowingsItem = ({ detail, onClose }) => {
   const [isFollowing, setIsFollowing] = useState(detail?.is_following);
   const { userInfos } = useContext(GeneralInfoContext);
   const [followRequest] = useFollow();

   const followHandler = () => {
      setIsFollowing((prev) => !prev);
      followRequest(detail.user_id);
   };

   // console.log(detail?.is_following);

   return (
      <Wrapper>
         <ImageWrapper to={`/profile/${detail?.username}/posts`}>
            <Image src={detail?.profile_photo ? `https://djangoinsta.pythonanywhere.com/${detail?.profile_photo}` : noProfile} />
         </ImageWrapper>
         <Details>
            <UserName to={`/profile/${detail?.username}/posts`} onClick={onClose}>
               {detail?.username}
            </UserName>
            <Name>{detail?.name}</Name>
         </Details>

         {userInfos?.username !== detail?.username &&
            (isFollowing ? (
               <UnfollowButton variant="contained" color="inherit" size="small" onClick={followHandler}>
                  Unfollow
               </UnfollowButton>
            ) : (
               <FollowButton variant="contained" color="info" size="small" onClick={followHandler}>
                  Follow
               </FollowButton>
            ))}
      </Wrapper>
   );
};

export default FollowingsItem;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
`;

const ImageWrapper = styled(Link)`
   width: 4.4rem;
   height: 4.4rem;
   text-decoration: none;

   @media (max-width: 900px) {
      width: 4rem;
      height: 4rem;
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
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const Name = styled.p`
   font-size: 1.4rem;
   color: gray;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const UnfollowButton = styled(Button)`
   margin-left: auto !important;
   font-size: 1.4rem !important;
   text-transform: none !important;
`;

const FollowButton = styled(Button)`
   margin-left: auto !important;
   font-size: 1.4rem !important;
   text-transform: none !important;
`;
