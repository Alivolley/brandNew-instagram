import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../../assets/svgs/SearchIcon";
import HomeIcon from "./../../assets/svgs/HomeIcon";
import ExploreIcon from "./../../assets/svgs/ExploreIcon";
import DirectIcon from "./../../assets/svgs/DirectIcon";
import ActivityIcon from "./../../assets/svgs/ActivityIcon";
import CreatePostIcon from "./../../assets/svgs/CreatePostIcon";
import InstagramText from "./../../assets/svgs/InstagramText";
import ThemeChangeIcon from "./../../assets/svgs/ThemeChangeIcon";
import NoProfilePhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import MoreIcon from "../../assets/svgs/MoreIcon";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import SidebarToggleMenu from "../../components/SidebarToggleMenu/SidebarToggleMenu";
import LeftMenuProfile from "../../components/Skeletons/LeftMenuProfile/LeftMenuProfile";

const LeftsideMenu = ({ userInfoLoading }) => {
   const { setTemplateTheme, templateTheme, userInfos } = useContext(GeneralInfoContext);
   const [isToggleMenuOpen, setIsToggleMenuOpen] = useState(false);

   const changeTheme = () => {
      const foundedTheme = localStorage.getItem("theme");
      setTemplateTheme(() => (foundedTheme === "white" ? "black" : "white"));
      localStorage.setItem("theme", foundedTheme === "white" ? "black" : "white");
   };

   return (
      <Leftside templateTheme={templateTheme}>
         <Logo to="/">
            <InstagramText />
         </Logo>
         <Links>
            <LinkedItem to="/">
               <Icon>
                  <HomeIcon />
               </Icon>
               <Text>Home</Text>
            </LinkedItem>

            <BottunItem>
               <Icon>
                  <SearchIcon />
               </Icon>
               <Text>Search</Text>
            </BottunItem>

            <LinkedItem to="/explore">
               <Icon>
                  <ExploreIcon />
               </Icon>
               <Text>Explore</Text>
            </LinkedItem>

            <LinkedItem to="/direct">
               <Icon>
                  <DirectIcon />
               </Icon>
               <Text>Messages</Text>
            </LinkedItem>

            <BottunItem>
               <Icon>
                  <ActivityIcon />
               </Icon>
               <Text>Notifications</Text>
            </BottunItem>

            <LinkedItem to="/createPost">
               <Icon>
                  <CreatePostIcon />
               </Icon>
               <Text>Create</Text>
            </LinkedItem>
            {!userInfoLoading ? (
               <LinkedItem to={`/profile/${userInfos.username}/posts`}>
                  <ProfilePhoto src={userInfos?.profile_photo ? `https://djangoinsta.pythonanywhere.com${userInfos.profile_photo}` : NoProfilePhoto} />
                  <Text>Profile</Text>
               </LinkedItem>
            ) : (
               <LeftMenuProfile />
            )}
         </Links>

         <MoreOptions>
            <BottunItem onClick={changeTheme}>
               <Icon>
                  <ThemeChangeIcon />
               </Icon>
               <Text>Change theme</Text>
            </BottunItem>

            <BottunItem onClick={() => setIsToggleMenuOpen((prev) => !prev)}>
               <Icon>
                  <MoreIcon />
               </Icon>
               <Text>More</Text>
               <SidebarToggleMenu isOpen={isToggleMenuOpen} closeMenu={() => setIsToggleMenuOpen(false)} userInfoLoading={userInfoLoading} />
            </BottunItem>
         </MoreOptions>
      </Leftside>
   );
};

export default LeftsideMenu;

const Leftside = styled.div`
   padding: 4rem 2.5rem;
   border-right: 0.1rem solid var(--border-color);
   position: sticky;
   top: 0;
   left: 0;
   bottom: 0;

   svg,
   p {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      fill: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Logo = styled(NavLink)``;

const Links = styled.div`
   margin-top: 5rem;
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
   gap: 2rem;
   align-items: center;
   color: black;
   transition: all 0.15s;

   &:hover {
      & > span,
      img {
         transform: scale(1.15);
      }
   }
`;

const BottunItem = styled.button`
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

const ProfilePhoto = styled.img`
   height: 2.4rem;
   width: 2.4rem;
   border-radius: 50%;
   border: 0.1rem solid var(--border-color);
   transition: all 0.15s;
`;

const MoreOptions = styled.div`
   margin-top: 13rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;
