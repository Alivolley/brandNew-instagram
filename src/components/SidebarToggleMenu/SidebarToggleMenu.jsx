import React, { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SavedIcon from "../../assets/svgs/SavedIcon";
import SettingIcon from "../../assets/svgs/SettingIcon";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import GroupIcon from "@mui/icons-material/Group";
import useOnClickOutside from "../../hooks/useOnclickOutside";

const SidebarToggleMenu = ({ isOpen, closeMenu }) => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const toggleMenuRef = useRef();

   useOnClickOutside(toggleMenuRef, closeMenu);

   return (
      <Wrapper isOpen={isOpen} templateTheme={templateTheme} ref={toggleMenuRef}>
         <Links>
            <LinkedItem to="/setting">
               <Text>Setting</Text>
               <Icon>
                  <SettingIcon />
               </Icon>
            </LinkedItem>

            <LinkedItem to="/profile/saved">
               <Text>Saved</Text>
               <Icon>
                  <SavedIcon />
               </Icon>
            </LinkedItem>

            <LinkedItem to="/developers">
               <Text>Developers</Text>
               <Icon>
                  <GroupIcon fontSize="large" />
               </Icon>
            </LinkedItem>

            <BottunItem>
               <Text>Logout</Text>
            </BottunItem>
         </Links>
      </Wrapper>
   );
};

export default SidebarToggleMenu;

const Wrapper = styled.div`
   position: absolute;
   bottom: 100%;
   background-color: ${({ templateTheme }) => templateTheme};
   border: 0.1rem solid var(--border-color);
   padding: 3rem;
   display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const Links = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3rem;

   .active {
      font-weight: 700;
   }
`;

const LinkedItem = styled(NavLink)`
   text-decoration: none;
   display: flex;
   justify-content: space-between;
   gap: 2rem;
   color: black;
   transition: all 0.15s;

   &:hover {
      span,
      & > img {
         transform: scale(1.15);
      }
   }
`;

const BottunItem = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   gap: 2rem;
   border: none;
   background-color: transparent;
   cursor: pointer;
   transition: all 0.15s;

   &:hover {
      & > span,
      img {
         transform: scale(1.15);
      }
   }
`;

const Text = styled.p``;

const Icon = styled.span`
   transition: all 0.15s;
`;
