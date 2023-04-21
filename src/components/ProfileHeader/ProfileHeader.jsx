import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import NoProfilePhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import { Link } from "react-router-dom";
import ChangePhotoModal from "../Modals/ChangePhotoModal/ChangePhotoModal";
import FollowersModal from "../Modals/FollowersModal/FollowersModal";
import FollowingsModal from "../Modals/FollowingsModal/FollowingsModal";
import { LoadingButton } from "@mui/lab";
import useFollow from "../../api/follow/useFollow";

const ProfileHeader = ({ templateTheme, profileInfos, profileDetailRequest }) => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   const [showChangePhotoModal, setShowChangePhotoModal] = useState(false);
   const [showFollowersModal, setShowFollowersModal] = useState(false);
   const [showFollowingsModal, setShowFollowingsModal] = useState(false);
   const [followRequest, loading] = useFollow();

   // console.log(profileInfos);

   const followUser = () => {
      followRequest(profileInfos?.id, profileDetailRequest);
   };

   return (
      <Wrapper isMatch={isMatch} templateTheme={templateTheme}>
         <Grid container>
            <Grid item xs={12} sm={4}>
               <ImageWrapper onClick={() => profileInfos?.is_owner && setShowChangePhotoModal(true)}>
                  <Image
                     src={profileInfos?.profile_photo ? `https://djangoinsta.pythonanywhere.com/${profileInfos?.profile_photo}` : NoProfilePhoto}
                  />
               </ImageWrapper>
            </Grid>
            <Grid item xs={12} sm={8}>
               <Discribtion>
                  <Title>
                     <Username>{profileInfos?.username}</Username>
                     {profileInfos?.is_owner && <EditButton to="/setting">Edit Profile</EditButton>}
                     {!profileInfos?.is_owner &&
                        (profileInfos?.is_following ? (
                           <UnFollowButton loading={loading} variant="contained" color="inherit" size="small" onClick={followUser}>
                              UnFollow
                           </UnFollowButton>
                        ) : (
                           <FollowButton loading={loading} variant="contained" size="small" onClick={followUser}>
                              Follow
                           </FollowButton>
                        ))}
                  </Title>

                  <FollowersWrapper>
                     <PostsCounts>
                        <CountHolder>{profileInfos?.posts_count}</CountHolder>
                        posts
                     </PostsCounts>
                     <FollowersCounts onClick={() => setShowFollowersModal(true)}>
                        <CountHolder>{profileInfos?.followers_count}</CountHolder>
                        followers
                     </FollowersCounts>
                     <FollowingsCounts onClick={() => setShowFollowingsModal(true)}>
                        <CountHolder>{profileInfos?.following_count}</CountHolder>
                        following
                     </FollowingsCounts>
                  </FollowersWrapper>

                  <BioWrapper>
                     <Name>{profileInfos?.name}</Name>
                     <Bio>{profileInfos?.bio}</Bio>
                  </BioWrapper>
               </Discribtion>
            </Grid>
         </Grid>

         <ChangePhotoModal
            show={showChangePhotoModal}
            handleClose={() => setShowChangePhotoModal(false)}
            templateTheme={templateTheme}
            isMatch={isMatch}
         />
         {showFollowersModal && (
            <FollowersModal
               show={showFollowersModal}
               handleClose={() => setShowFollowersModal(false)}
               templateTheme={templateTheme}
               profileInfos={profileInfos}
            />
         )}
         {showFollowingsModal && (
            <FollowingsModal show={showFollowingsModal} handleClose={() => setShowFollowingsModal(false)} templateTheme={templateTheme} />
         )}
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
   width: fit-content;
   margin: 0 auto;
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

const FollowButton = styled(LoadingButton)`
   text-transform: none !important;
   font-size: 1.4rem !important;
   color: white !important;

   &:disabled {
      color: rgba(0, 0, 0, 0) !important;
      background-color: #e0e0e0 !important;
   }
`;

const UnFollowButton = styled(LoadingButton)`
   text-transform: none !important;
   font-size: 1.4rem !important;
   color: black !important;

   &:disabled {
      color: rgba(0, 0, 0, 0) !important;
      background-color: #e0e0e0 !important;
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

   @media (max-width: 600px) {
      width: 30rem;
   }

   @media (max-width: 400px) {
      width: 25rem;
   }
`;

const Name = styled.h4`
   font-weight: 600;
   font-size: 1.45rem;
   width: 100%;
`;

const Bio = styled.pre`
   font-size: 1.45rem;
   margin-top: 0.6rem;
   line-height: 2.3rem;
   width: 100%;
   white-space: pre-line;
`;
