import React, { useRef } from "react";
import styled from "styled-components";
import NotificationItem from "../NotificationItem/NotificationItem";
import CloseButtonIcon from "../../assets/svgs/CloseButtonIcon";
import useOnClickOutside from "../../hooks/useOnclickOutside";

const HeaderNotification = ({ templateTheme, colseHandler }) => {
   const toggleMenuRef = useRef();

   useOnClickOutside(toggleMenuRef, colseHandler);

   return (
      <Wrapper templateTheme={templateTheme} ref={toggleMenuRef}>
         <BodyTitle templateTheme={templateTheme}>
            Acftivities
            <Icon onClick={colseHandler}>
               <CloseButtonIcon />
            </Icon>
         </BodyTitle>

         {/* <NoResult>No recent activity</NoResult> */}
         <ResultBody>
            {/* <NotificationItem detail={} onClose={colseHandler} templateTheme={templateTheme}/> */}
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
         </ResultBody>
      </Wrapper>
   );
};

export default HeaderNotification;

const Wrapper = styled.div`
   position: absolute;
   top: 100%;
   right: 0;
   background-color: ${({ templateTheme }) => templateTheme};
   border: 0.1rem solid var(--border-color);
   padding: 1rem;
   padding-top: 0;
   max-height: 21rem;
   overflow: auto;
   border-radius: 0.3rem;
   width: 23rem;

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }
`;

const BodyTitle = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 1.5rem;
   border-bottom: 0.1rem solid var(--border-color);
   padding: 1rem 0;
   margin-bottom: 1rem;
   position: sticky;
   top: 0;
   right: 0;
   left: 0;
   background-color: ${({ templateTheme }) => templateTheme};
`;

const Icon = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
`;

const ResultBody = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

const NoResult = styled.p`
   text-align: center;
   font-size: 1.4rem;
   color: gray;
`;
