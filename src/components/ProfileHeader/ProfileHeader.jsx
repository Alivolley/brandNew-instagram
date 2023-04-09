import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import NoProfilePhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import { Link } from "react-router-dom";
import ChangePhotoModal from "../Modals/ChangePhotoModal/ChangePhotoModal";

const ProfileHeader = ({ templateTheme }) => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const [showChangePhotoModal, setShowChangePhotoModal] = useState(false);

   return (
      <Wrapper isMatch={isMatch} templateTheme={templateTheme}>
         <Grid container>
            <Grid item xs={12} sm={4}>
               <ImageWrapper onClick={() => setShowChangePhotoModal(true)}>
                  <Image src={NoProfilePhoto} />
               </ImageWrapper>
            </Grid>
            <Grid item xs={12} sm={8}>
               <Discribtion>
                  <Title>
                     <Username>ali_azghandi8</Username>
                     <EditButton to="/setting">Edit Profile</EditButton>
                  </Title>

                  <FollowersWrapper>
                     <PostsCounts>
                        <CountHolder>7</CountHolder>
                        posts
                     </PostsCounts>
                     <FollowersCounts>
                        <CountHolder>854</CountHolder>
                        followers
                     </FollowersCounts>
                     <FollowingsCounts>
                        <CountHolder>264</CountHolder>
                        following
                     </FollowingsCounts>
                  </FollowersWrapper>

                  <BioWrapper>
                     <Name>ali agha</Name>
                     <Bio>Lorem ipsum, dolor sit</Bio>
                     <Bio>Lorem ipsum, dolor sit</Bio>
                     <Bio>Lorem ipsum, dolor sit</Bio>
                  </BioWrapper>
               </Discribtion>
            </Grid>
         </Grid>

         <ChangePhotoModal show={showChangePhotoModal} handleClose={() => setShowChangePhotoModal(false)} templateTheme={templateTheme} isMatch={isMatch} />
      </Wrapper>
   );
};

export default ProfileHeader;

const Wrapper = styled.div`
   margin-top: ${({ isMatch }) => (isMatch ? "0" : "3rem")};
   color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};

   button {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const ImageWrapper = styled.div`
   display: flex;
   justify-content: center;
   cursor: pointer;
`;

const Image = styled.img`
   width: 15rem;
   height: 15rem;
   background-color: black;
   border-radius: 50%;
   border: 0.1rem solid var(--border-color);
`;

const Discribtion = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;

   @media (max-width: 600px) {
      padding: 1.5rem;
      margin-top: 3rem;
      align-items: center;
   }
`;

const Title = styled.div`
   display: flex;
   align-items: center;
   gap: 4rem;
`;

const Username = styled.h4`
   font-weight: 500;
   font-size: 2rem;
`;

const EditButton = styled(Link)`
   text-decoration: none;
   color: black;
   background-color: rgb(239, 239, 239);
   padding: 0.8rem 1.5rem;
   border-radius: 0.8rem;
   transition: all 0.2s;
   font-size: 1.5rem;

   &:hover {
      background-color: var(--border-color);
   }

   @media (max-width: 600px) {
      font-size: 1.3rem;
   }
`;

const FollowersWrapper = styled.div`
   display: flex;
   gap: 4rem;

   @media (max-width: 400px) {
      gap: 1rem;
   }
`;

const PostsCounts = styled.p`
   display: flex;
   gap: 0.7rem;
`;

const FollowersCounts = styled.button`
   display: flex;
   gap: 0.7rem;
   border: none;
   background-color: transparent;
   cursor: pointer;
`;

const FollowingsCounts = styled(FollowersCounts)``;

const CountHolder = styled.span`
   font-weight: 600;
`;

const BioWrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

const Name = styled.h4`
   font-weight: 600;
   font-size: 1.45rem;
`;

const Bio = styled.pre`
   font-size: 1.45rem;
`;
