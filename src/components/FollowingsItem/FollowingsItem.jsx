import { LoadingButton } from "@mui/lab";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import testPhoto from "./../../assets/Images/testPhoto.png";

const FollowingsItem = () => {
   return (
      <Wrapper>
         <Image src={testPhoto} />
         <Details>
            <UserName>javdi googool</UserName>
            <Name>javad ahga</Name>
         </Details>
         <RemoveButton variant="contained" color="info" size="small" loading={false}>
            Unfollow
         </RemoveButton>
      </Wrapper>
   );
};

export default FollowingsItem;

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
