import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PostsCover from "../../components/PostsCover/PostsCover";
import useExplore from "../../api/explore/useExplore";
import PostsProfile from "../../components/Skeletons/PostsProfile/PostsProfile";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const Explore = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [getExplorePostsRequest, getMoreExplorePosts, loading, allExplorePosts, nextUrl] = useExplore();

   useEffect(() => {
      getExplorePostsRequest();
   }, []);

   return (
      <Wrapper>
         <Grid container spacing={0.5}>
            {allExplorePosts.map((post) => (
               <Grid item xs={4} key={post.id}>
                  <PostsCover detail={post} />
               </Grid>
            ))}
         </Grid>

         {loading && <PostsProfile />}
         {!loading && allExplorePosts.length === 0 && <NoPosts>No post</NoPosts>}

         {!loading && nextUrl && (
            <AddButton onClick={getMoreExplorePosts} templateTheme={templateTheme}>
               <ControlPointIcon color="inherit" fontSize="inherit" />
            </AddButton>
         )}
      </Wrapper>
   );
};

export default Explore;

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
