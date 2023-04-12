import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PostsCover from "../PostsCover/PostsCover";
import useSavedPosts from "../../api/savedPosts/useSavedPosts";
import PostsProfile from "../Skeletons/PostsProfile/PostsProfile";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const ProfileSaved = () => {
   const [getSavedPostsRequest, getMoreSavedPosts, loading, savedPosts, nextUrl] = useSavedPosts();
   const { templateTheme } = useContext(GeneralInfoContext);
   // eslint-disable-next-line no-unused-vars
   const [reload, setReload] = useState(false);

   useEffect(() => {
      getSavedPostsRequest();
   }, []);

   useEffect(() => {
      setReload((prev) => !prev);
   }, [savedPosts]);

   return (
      <Wrapper>
         <Grid container spacing={0.5}>
            {savedPosts.map((post) => (
               <Grid item xs={4} key={post.id}>
                  <PostsCover detail={post} />
               </Grid>
            ))}
         </Grid>
         {loading && <PostsProfile />}
         {!loading && savedPosts.length === 0 && <NoPosts>No post</NoPosts>}

         {!loading && nextUrl && (
            <AddButton onClick={getMoreSavedPosts} templateTheme={templateTheme}>
               <ControlPointIcon color="inherit" fontSize="inherit" />
            </AddButton>
         )}
      </Wrapper>
   );
};

export default ProfileSaved;

const Wrapper = styled.div`
   padding: 2rem;
   max-width: 100rem;
   margin: 0 auto;
`;

const NoPosts = styled.p`
   color: gray;
   text-align: center;
`;

const AddButton = styled.button`
   display: block;
   width: fit-content;
   margin: 0 auto;
   border: none;
   background-color: transparent;
   cursor: pointer;
   width: fit-content;
   margin: 0 auto;
   font-size: 4.5rem;
   color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};

   @media (max-width: 400px) {
      font-size: 3rem;
   }
`;
