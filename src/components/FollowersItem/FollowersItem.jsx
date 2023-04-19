import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import { LoadingButton } from "@mui/lab";

const FollowersItem = ({ detail, onClose, profileInfos }) => {
   // console.log(detail?.is_following);

   return (
      <Wrapper>
         <Image src={detail?.profile_photo ? `https://djangoinsta.pythonanywhere.com/${detail?.profile_photo}` : noProfile} />
         <Details>
            <UserName to={`/profile/${detail?.username}/posts`} onClick={onClose}>
               {detail?.username}
            </UserName>
            <Name>{detail?.name}</Name>
         </Details>

         {profileInfos?.is_owner && (
            <RemoveButton variant="contained" color="info" size="small" loading={false}>
               Remove
            </RemoveButton>
         )}

         {!profileInfos?.is_owner && detail?.is_following ? (
            <UnfollowButton variant="contained" color="info" size="small" loading={false}>
               Unfollow
            </UnfollowButton>
         ) : !profileInfos?.is_owner && !detail?.is_following ? (
            <FollowButton variant="contained" color="info" size="small" loading={false}>
               Follow
            </FollowButton>
         ) : null}
      </Wrapper>
   );
};

export default FollowersItem;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
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

const RemoveButton = styled(LoadingButton)`
   margin-left: auto !important;
   font-size: 1.4rem !important;
   text-transform: none !important;
`;

const UnfollowButton = styled(LoadingButton)`
   margin-left: auto !important;
   font-size: 1.4rem !important;
   text-transform: none !important;
`;

const FollowButton = styled(LoadingButton)`
   margin-left: auto !important;
   font-size: 1.4rem !important;
   text-transform: none !important;
`;
