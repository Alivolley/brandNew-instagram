import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import HomePost from "../../components/HomePost/HomePost";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import SuggestionItem from "../../components/SuggestionItem/SuggestionItem";
import useHome from "../../api/home/useHome";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HomePostsSkeleton from "../../components/Skeletons/HomePostsSkeleton/HomePostsSkeleton";
import { useMediaQuery, useTheme } from "@mui/material";
import useSuggestions from "../../api/suggestions/useSuggestions";
import SuggestionsSkeleton from "../../components/Skeletons/SuggestionsSkeleton/SuggestionsSkeleton";

const Home = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.up("lg"));
   const [getHomePostsRequest, getMoreHomePosts, loading, allHomePosts, nextUrl] = useHome();
   const [getSuggestionsRequest, suggestionsloading, allSuggestionsPosts] = useSuggestions();

   useEffect(() => {
      getHomePostsRequest();
      isMatch && getSuggestionsRequest();
   }, []);

   // console.log(allSuggestionsPosts);

   return (
      <Wrapper templateTheme={templateTheme}>
         <Posts>
            {allHomePosts?.map((post) => (
               <HomePost key={post?.id} detail={post} />
            ))}

            {loading && <HomePostsSkeleton />}
            {!loading && allHomePosts.length === 0 && <NoPosts>No posts . Follow more pepole to see their posts</NoPosts>}

            {!loading && nextUrl && (
               <AddButton onClick={getMoreHomePosts} templateTheme={templateTheme}>
                  <ControlPointIcon color="inherit" fontSize="inherit" />
               </AddButton>
            )}
         </Posts>

         {isMatch && (
            <SuggestionWrapper>
               <SuggestionTitle>Suggestions for you</SuggestionTitle>

               <SuggestionBody>
                  {allSuggestionsPosts?.map((post) => (
                     <SuggestionItem key={post?.username} detail={post} getSuggestionsRequest={getSuggestionsRequest} />
                  ))}

                  {suggestionsloading && !allSuggestionsPosts.length && <SuggestionsSkeleton />}
               </SuggestionBody>
            </SuggestionWrapper>
         )}
      </Wrapper>
   );
};

export default Home;

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   gap: 5rem;
   background-color: ${({ templateTheme }) => templateTheme};

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Posts = styled.section`
   padding: 1.5rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   width: 29rem;

   @media (min-width: 350px) {
      width: 32rem;
   }

   @media (min-width: 400px) {
      width: 35rem;
   }

   @media (min-width: 430px) {
      width: 38rem;
   }

   @media (min-width: 460px) {
      width: 41rem;
   }

   @media (min-width: 600px) {
      width: 50rem;
   }
`;

const SuggestionWrapper = styled.section`
   width: 30rem;
   margin-top: 3rem;
`;

const SuggestionTitle = styled.p`
   font-size: 1.3rem;
   color: gray;
   font-weight: 700;
   margin-bottom: 3rem;
`;

const SuggestionBody = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 2rem;
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

const NoPosts = styled.p`
   text-align: center;
   font-weight: 700;
   opacity: 0.7;

   @media (min-width: 600px) {
      margin-top: 5rem;
   }
`;
