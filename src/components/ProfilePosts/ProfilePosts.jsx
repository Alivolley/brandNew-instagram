import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import PostsCover from "../PostsCover/PostsCover";
import InfiniteScroll from "react-infinite-scroll-component";
import PostsProfile from "../Skeletons/PostsProfile/PostsProfile";
import useAllPosts from "../../api/allPosts/useAllPosts";
import { useParams } from "react-router-dom";

const ProfilePosts = () => {
   const { username } = useParams();

   const [getPostsRequest, getMorePosts, loading, allPosts, nextUrl, totalObjects] = useAllPosts(username);

   useEffect(() => {
      getPostsRequest();
   }, []);

   return (
      <InfiniteScroll dataLength={totalObjects} next={getMorePosts} hasMore={nextUrl ? true : false}>
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
         </Wrapper>
      </InfiniteScroll>
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
