import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PostsCover from "../PostsCover/PostsCover";
import PostsProfile from "../Skeletons/PostsProfile/PostsProfile";
import useAllPosts from "../../api/allPosts/useAllPosts";
import { useParams } from "react-router-dom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GeneralInfoContext from "./../../contexts/GeneralInfoContext";

const ProfilePosts = () => {
   const { username } = useParams();
   const { templateTheme } = useContext(GeneralInfoContext);
   // eslint-disable-next-line no-unused-vars
   const [reload, setReload] = useState(false);

   const [getPostsRequest, getMorePosts, loading, allPosts, nextUrl] = useAllPosts(username);

   useEffect(() => {
      getPostsRequest();
   }, []);

   useEffect(() => {
      setReload((prev) => !prev);
   }, [allPosts]);

   return (
      <Wrapper>
         <Grid container spacing={0.5}>
            {allPosts.map((post) => (
               <Grid item xs={4} key={post.id}>
                  <PostsCover detail={post} />
               </Grid>
            ))}
         </Grid>
         {loading && <PostsProfile />}
         {!loading && allPosts.length === 0 && <NoPosts>No post</NoPosts>}

         {!loading && nextUrl && (
            <AddButton onClick={getMorePosts} templateTheme={templateTheme}>
               <ControlPointIcon color="inherit" fontSize="inherit" />
            </AddButton>
         )}
      </Wrapper>
   );
};

export default ProfilePosts;

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
