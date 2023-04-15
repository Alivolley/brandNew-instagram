import React, { useContext } from "react";
import styled from "styled-components";
import HomePost from "../../components/HomePost/HomePost";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

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
         <Suggestion>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus veniam quod in animi atque, error, sit repellendus
            necessitatibus suscipit sequi fugiat eligendi sapiente nesciunt eveniet! At rem aliquid voluptas!
         </Suggestion>
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

const Suggestion = styled.section`
   width: 20rem;
   @media (max-width: 1200px) {
      display: none;
   }
`;
