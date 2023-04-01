import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ActivityIcon from "../../assets/svgs/ActivityIcon";
import InstagramText from "../../assets/svgs/InstagramText";
import HeaderSearch from "../../components/HeaderSearch/HeaderSearch";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const Header = () => {
   const { setTemplateTheme, templateTheme } = useContext(GeneralInfoContext);
   return (
      <Wrapper templateTheme={templateTheme}>
         <Logo to="/">
            <InstagramText />
         </Logo>

         <RightGroup>
            <HeaderSearch templateTheme={templateTheme} />

            <BottunItem>
               <Icon>
                  <ActivityIcon />
               </Icon>
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
   display: flex;
   align-items: center;
   padding: 1.5rem 2rem;
   border-bottom: 0.1rem solid var(--border-color);
   background-color: ${({ templateTheme }) => templateTheme};

   svg {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      fill: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Logo = styled(NavLink)`
   @media (max-width: 420px) {
      display: none;
   }
`;

const RightGroup = styled.div`
   display: flex;
   gap: 3rem;
   margin-left: auto;
`;

const BottunItem = styled.button`
   display: flex;
   align-items: center;
   border: none;
   background-color: transparent;
   cursor: pointer;
`;

const Icon = styled.div`
   transition: all 0.15s;
`;
