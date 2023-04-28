import React from "react";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import { NavLink } from "react-router-dom";

const DirectUserItem = ({ templateTheme }) => {
   return (
      <Wrapper to={`/direct`} templatetheme={templateTheme}>
         <Image src={noProfile} />
         <Detail>
            <Username>ali azghandi</Username>
            <LastMessage>has sent you a message</LastMessage>
         </Detail>
      </Wrapper>
   );
};

export default DirectUserItem;

const Wrapper = styled(NavLink)`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 1.5rem;
   padding: 1rem 1.5rem;
   transition: all 0.1s;
   cursor: pointer;
   text-decoration: none;

   &:hover {
      background-color: ${({ templatetheme }) => (templatetheme === "white" ? "rgb(239, 239, 239)" : "rgb(38, 38, 38)")};
   }
`;

const Image = styled.img`
   width: 5.6rem;
   height: 5.6rem;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const Detail = styled.div`
   width: 65%;
   display: flex;
   flex-direction: column;
`;

const Username = styled.p`
   font-size: 1.4rem;
   font-weight: 500;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;

const LastMessage = styled.p`
   font-size: 1.3rem;
   color: gray;
   max-width: 100%;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`;
