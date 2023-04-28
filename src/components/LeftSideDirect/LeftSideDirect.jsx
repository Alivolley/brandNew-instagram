import React from "react";
import styled from "styled-components";
import SendMessage from "../../assets/svgs/SendMessage";
import DirectUserItem from "../DirectUserItem/DirectUserItem";

const LeftSideDirect = ({ templateTheme }) => {
   return (
      <Wrapper>
         <Header templateTheme={templateTheme}>
            <Headerdiv></Headerdiv>
            <HeaderUsername>ali-azghandi</HeaderUsername>
            <HeaderIcon>
               <SendMessage />
            </HeaderIcon>
         </Header>

         <Body templateTheme={templateTheme}>
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
            <DirectUserItem templateTheme={templateTheme} />
         </Body>
      </Wrapper>
   );
};

export default LeftSideDirect;

const Wrapper = styled.div`
   width: 35rem;
   height: 100%;
   border-right: 0.1rem solid var(--border-color);
   overflow: auto;
`;

const Header = styled.div`
   position: sticky;
   top: 0;
   display: flex;
   justify-content: space-between;
   padding: 1.5rem 2rem;
   border-bottom: 0.1rem solid var(--border-color);
   background-color: ${({ templateTheme }) => templateTheme};
`;

const Headerdiv = styled.div``;

const HeaderUsername = styled.p`
   font-weight: 600;
   font-size: 1.8rem;
`;

const HeaderIcon = styled.div`
   cursor: pointer;
`;

const Body = styled.div`
   display: flex;
   flex-direction: column;

   /* .active {
      background-color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(239, 239, 239)" : "rgb(38, 38, 38)")};
   } */
`;
