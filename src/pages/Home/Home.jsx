import React, { useContext } from "react";
import styled from "styled-components";
import HomePost from "../../components/HomePost/HomePost";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import SuggestionItem from "../../components/SuggestionItem/SuggestionItem";

const Home = () => {
   const { templateTheme } = useContext(GeneralInfoContext);

   return (
      <Wrapper templateTheme={templateTheme}>
         <Posts>
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
            <HomePost />
         </Posts>

         <SuggestionWrapper>
            <SuggestionTitle>Suggestions for you</SuggestionTitle>
            <SuggestionBody>
               <SuggestionItem />
               <SuggestionItem />
               <SuggestionItem />
               <SuggestionItem />
               <SuggestionItem />
            </SuggestionBody>
         </SuggestionWrapper>
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
   width: 50rem;

   @media (max-width: 600px) {
      width: 28rem;
   }
`;

const SuggestionWrapper = styled.section`
   width: 25rem;
   margin-top: 3rem;

   @media (max-width: 1200px) {
      display: none;
   }
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
