import React, { useContext } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import alipic from "./../../assets/Images/ali.png";
import javadpic from "./../../assets/Images/javad.jpg";
import TelegramIcon from "@mui/icons-material/Telegram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";

const Developers = () => {
   const { templateTheme } = useContext(GeneralInfoContext);

   return (
      <Container templateTheme={templateTheme}>
         <Wrapper>
            <Image src={alipic} />
            <Body>
               <Title>Fronend developer</Title>
               <Username>Ali azghandi</Username>
               <InfoItem>
                  <Icon>
                     <TelegramIcon fontSize="inherit" />
                  </Icon>
                  <LinkTelegram href="https://t.me/Alivolley" target="_blank">
                     @Alivolley
                  </LinkTelegram>
               </InfoItem>
               <InfoItem>
                  <Icon>
                     <PhoneInTalkIcon fontSize="inherit" />
                  </Icon>
                  <Detail>0938 393 5719</Detail>
               </InfoItem>
               <InfoItem>
                  <Icon>
                     <EmailIcon fontSize="inherit" />
                  </Icon>
                  <Detail>alicryptovolley@gmail.com</Detail>
               </InfoItem>
            </Body>
         </Wrapper>

         <Line></Line>

         <Wrapper>
            <Image src={javadpic} />
            <Body>
               <Title>Backend developer</Title>
               <Username>Javad najjari</Username>
               <InfoItem>
                  <Icon>
                     <TelegramIcon fontSize="inherit" />
                  </Icon>
                  <LinkTelegram href="https://t.me/J_N_1998" target="_blank">
                     @J_N_1998
                  </LinkTelegram>
               </InfoItem>
               <InfoItem>
                  <Icon>
                     <PhoneInTalkIcon fontSize="inherit" />
                  </Icon>
                  <Detail>0990 822 7202</Detail>
               </InfoItem>
               <InfoItem>
                  <Icon>
                     <EmailIcon fontSize="inherit" />
                  </Icon>
                  <Detail>javad.programmer100@gmail.com</Detail>
               </InfoItem>
            </Body>
         </Wrapper>
      </Container>
   );
};

export default Developers;

const Container = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   border: 0.1rem solid var(--border-color);
   margin: 4rem 5rem;
   border-radius: 1rem;

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }

   @media (max-width: 900px) {
      margin: 1.5rem;
   }
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 4rem;
   padding: 4rem;

   @media (max-width: 900px) {
      flex-direction: column;
      align-items: start;
      padding: 1rem;
   }
`;

const Image = styled.img`
   width: 24rem;
   height: 24rem;
   border-radius: 1rem;

   @media (max-width: 900px) {
      width: 18rem;
      height: 18rem;
      margin: 0 auto;
   }
`;

const Body = styled.div`
   display: flex;
   flex-direction: column;
   overflow: hidden;

   @media (max-width: 900px) {
      padding-left: 1rem;
   }
`;

const Title = styled.h3`
   font-size: 2.3rem;
`;

const Username = styled.p`
   margin-top: 1rem;
   margin-bottom: 2rem;
`;

const InfoItem = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
   margin-top: 2rem;

   @media (max-width: 900px) {
      gap: 1rem;
   }
`;

const Icon = styled.div`
   font-size: 2rem;
   border: 0.1rem solid var(--border-color);
   padding: 0.3rem;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0.5rem;

   @media (max-width: 900px) {
      font-size: 1.6rem;
   }
`;

const Detail = styled.p`
   @media (max-width: 900px) {
      font-size: 1.3rem;
   }
`;

const LinkTelegram = styled.a`
   text-decoration: none;
`;

const Line = styled.div`
   background-color: var(--border-color);
   box-sizing: border-box;
   width: 85%;
   margin: 0 auto;
   height: 0.1rem;

   @media (max-width: 900px) {
      margin: 4rem auto;
   }
`;
