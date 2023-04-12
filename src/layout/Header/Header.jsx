import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ActivityIcon from "../../assets/svgs/ActivityIcon";
import InstagramText from "../../assets/svgs/InstagramText";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import InstagramIcon from "../../assets/svgs/InstagramIcon";
import HeaderNotification from "../../components/HeaderNotification/HeaderNotification";

const Header = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [showNotifs, setShowNotifs] = useState(false);

   return (
      <Wrapper templateTheme={templateTheme}>
         <Logo to="/">
            <InstagramText />
         </Logo>

         <InstagramIconWrapper to="/">
            <InstagramIcon />
         </InstagramIconWrapper>

         <RightGroup>
            <HeaderSearch templateTheme={templateTheme} />

            <BottunItem>
               <Icon onClick={() => setShowNotifs(true)}>
                  <ActivityIcon />
               </Icon>
               {showNotifs && <HeaderNotification templateTheme={templateTheme} colseHandler={() => setShowNotifs(false)} />}
            </BottunItem>
         </RightGroup>
      </Wrapper>
   );
};

export default Header;

const Wrapper = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   z-index: 5;
   display: flex;
   align-items: center;
   padding: 1.5rem 1rem;
   border-bottom: 0.1rem solid var(--border-color);
   background-color: ${({ templateTheme }) => templateTheme};

   svg {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      fill: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Logo = styled(NavLink)`
   @media (max-width: 445px) {
      display: none;
   }
`;

const InstagramIconWrapper = styled(NavLink)`
   @media (min-width: 445px) {
      display: none;
   }
`;

const RightGroup = styled.div`
   display: flex;
   gap: 3rem;
   margin-left: auto;
`;

const BottunItem = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   cursor: pointer;
`;

const Icon = styled.div`
   transition: all 0.15s;
`;
