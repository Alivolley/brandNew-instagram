import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CreatePostIcon from "../../assets/svgs/CreatePostIcon";
import DirectIcon from "../../assets/svgs/DirectIcon";
import ExploreIcon from "../../assets/svgs/ExploreIcon";
import HomeIcon from "../../assets/svgs/HomeIcon";
import ThemeChangeIcon from "../../assets/svgs/ThemeChangeIcon";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import NoProfilePhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import FooterProfile from "../../components/Skeletons/FooterProfile/FooterProfile";

const Footer = ({ userInfoLoading }) => {
   const { setTemplateTheme, templateTheme, userInfos } = useContext(GeneralInfoContext);

   const changeTheme = () => {
      const foundedTheme = localStorage.getItem("theme");
      setTemplateTheme(() => (foundedTheme === "white" ? "black" : "white"));
      localStorage.setItem("theme", foundedTheme === "white" ? "black" : "white");
   };

   return (
      <Wrapper templateTheme={templateTheme}>
         <LinkedItem to="/">
            <Icon>
               <HomeIcon />
            </Icon>
         </LinkedItem>

         <LinkedItem to="/explore">
            <Icon>
               <ExploreIcon />
            </Icon>
         </LinkedItem>

         <LinkedItem to="/createPost">
            <Icon>
               <CreatePostIcon />
            </Icon>
         </LinkedItem>

         <LinkedItem to="/direct">
            <Icon>
               <DirectIcon />
            </Icon>
         </LinkedItem>

         <BottunItem onClick={changeTheme}>
            <Icon>
               <ThemeChangeIcon />
            </Icon>
         </BottunItem>
         {!userInfoLoading ? (
            <LinkedItem to={`/profile/${userInfos?.username}/posts`}>
               <ProfilePhoto src={userInfos?.profile_photo ? `https://djangoinsta.pythonanywhere.com${userInfos.profile_photo}` : NoProfilePhoto} />
            </LinkedItem>
         ) : (
            <FooterProfile />
         )}
      </Wrapper>
   );
};

export default Footer;

const Wrapper = styled.div`
   position: fixed;
   bottom: 0;
   right: 0;
   left: 0;
   z-index: 5;
   display: flex;
   justify-content: space-between;
   padding: 1.5rem 4rem;
   border-top: 0.1rem solid var(--border-color);
   background-color: ${({ templateTheme }) => templateTheme};

   svg {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      fill: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const LinkedItem = styled(NavLink)`
   display: flex;
   align-items: center;
   transition: all 0.15s;

   &:hover {
      div,
      img {
         transform: scale(1.15);
      }
   }
`;

const Icon = styled.div`
   transition: all 0.15s;
`;

const BottunItem = styled.button`
   display: flex;
   align-items: center;
   border: none;
   background-color: transparent;
   cursor: pointer;
   transition: all 0.15s;

   &:hover {
      div,
      img {
         transform: scale(1.15);
      }
   }
`;

const ProfilePhoto = styled.img`
   height: 2.4rem;
   width: 2.4rem;
   border-radius: 50%;
   border: 0.1rem solid var(--border-color);
   transition: all 0.15s;
`;
