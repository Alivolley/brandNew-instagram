import React from "react";
import styled from "styled-components";
import DirectIntroduceIcon from "../../assets/svgs/DirectIntroduceIcon";
import { Button } from "@mui/material";

const DirectIntroduce = () => {
   return (
      <Wrapper>
         <Body>
            <DirectIntroduceIcon />
            <Title>Your Messages</Title>
            <Text>Send private messages to a friends</Text>
            <ButtonSendMessage variant="contained" size="small">
               Send messages
            </ButtonSendMessage>
         </Body>
      </Wrapper>
   );
};

export default DirectIntroduce;

const Wrapper = styled.div`
   width: 25rem;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;

   @media (min-width: 330px) {
      width: 28rem;
   }

   @media (min-width: 360px) {
      width: 31rem;
   }

   @media (min-width: 390px) {
      width: 34rem;
   }

   @media (min-width: 420px) {
      width: 37rem;
   }

   @media (min-width: 600px) {
      width: 25rem;
   }

   @media (min-width: 700px) {
      width: 30rem;
   }

   @media (min-width: 1100px) {
      width: 35rem;
   }

   @media (min-width: 1200px) {
      width: 38rem;
   }

   @media (min-width: 1300px) {
      width: 45rem;
   }

   @media (min-width: 1400px) {
      width: 55rem;
   }
`;

const Body = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1rem;
`;

const Title = styled.p`
   font-size: 2rem;
   font-weight: 500;
`;

const Text = styled.p`
   font-size: 1.4rem;
   color: gray;
`;

const ButtonSendMessage = styled(Button)`
   text-transform: none !important;
   font-size: 1.3rem !important;
   margin-top: 1rem !important;
`;
