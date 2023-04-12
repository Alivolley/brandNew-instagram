import React, { useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import PostsCover from "../PostsCover/PostsCover";
import useSavedPosts from "../../api/savedPosts/useSavedPosts";
import InfiniteScroll from "react-infinite-scroll-component";
import PostsProfile from "../Skeletons/PostsProfile/PostsProfile";

const ProfileSaved = () => {
   const [getSavedPostsRequest, getMoreSavedPosts, loading, savedPosts, nextUrl, totalObjects] = useSavedPosts();

   useEffect(() => {
      getSavedPostsRequest();
   }, []);

   return (
      <InfiniteScroll dataLength={totalObjects} next={getMoreSavedPosts} hasMore={nextUrl ? true : false}>
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
         </Wrapper>
      </InfiniteScroll>
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
