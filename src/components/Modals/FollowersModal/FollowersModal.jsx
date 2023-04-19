import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import CloseButtonIcon from "./../../../assets/svgs/CloseButtonIcon";
import FollowersItem from "../../FollowersItem/FollowersItem";
import { useParams } from "react-router-dom";
import useFollowers from "../../../api/followers/useFollowers";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import FollowersItemLoading from "../../Skeletons/FollowersItem/FollowersItemLoading";

const FollowersModal = ({ show, handleClose, templateTheme, profileInfos }) => {
   const { username } = useParams();
   const [getFollowersRequest, getMoreFollowers, loading, followersData, nextUrl] = useFollowers(username);

   useEffect(() => {
      getFollowersRequest();
   }, []);

   return (
      <Modal open={show} onClose={handleClose} sx={{ backdropFilter: "brightness(60%)" }}>
         <Wrapper templateTheme={templateTheme}>
            <Header>
               <EmptyDiv />
               <Title>Followers</Title>
               <CloseBtn onClick={handleClose}>
                  <CloseButtonIcon />
               </CloseBtn>
            </Header>
            <ModlaBody>
               {followersData.map((follower) => (
                  <FollowersItem key={follower.id} detail={follower} onClose={handleClose} profileInfos={profileInfos} />
               ))}

               {loading && <FollowersItemLoading />}

               {nextUrl && !loading && (
                  <AddButton onClick={getMoreFollowers}>
                     <ControlPointIcon color="inherit" fontSize="inherit" />
                  </AddButton>
               )}
            </ModlaBody>
         </Wrapper>
      </Modal>
   );
};

export default FollowersModal;

const Wrapper = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 40rem;
   background-color: ${({ templateTheme }) => templateTheme};
   border-radius: 1rem;
   overflow: hidden;
   border: 0.1rem solid var(--border-color);

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }

   @media (max-width: 600px) {
      width: 27rem;
   }
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-bottom: 1rem;
   border-bottom: 0.1rem solid var(--border-color);
   padding: 1.5rem;
`;

const EmptyDiv = styled.div``;

const Title = styled.h5`
   font-weight: 500;
`;

const CloseBtn = styled.div`
   cursor: pointer;
`;

const ModlaBody = styled.div`
   max-height: 40rem;
   overflow: auto;
   padding: 1.5rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;

const AddButton = styled.button`
   border: none;
   background-color: transparent;
   cursor: pointer;
   width: fit-content;
   margin: 0 auto;
   font-size: 2.4rem;
`;
