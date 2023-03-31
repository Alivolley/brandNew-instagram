import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "../../assets/svgs/searchIcon";
import HomeIcon from "./../../assets/svgs/HomeIcon";
import ExploreIcon from "./../../assets/svgs/ExploreIcon";
import DirectIcon from "./../../assets/svgs/DirectIcon";
import ActivityIcon from "./../../assets/svgs/ActivityIcon";
import CreatePostIcon from "./../../assets/svgs/CreatePostIcon";
import InstagramText from "./../../assets/svgs/InstagramText";
import ThemeChangeIcon from "./../../assets/svgs/ThemeChangeIcon";
import NoProfilePhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import MoreIcon from "../../assets/svgs/MoreIcon";

const LeftsideMenu = () => {
   return (
      <Leftside>
         <Logo>
            <InstagramText />
         </Logo>
         <Links>
            <LinkedItem>
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

            <LinkedItem>
               <Icon>
                  <ExploreIcon />
               </Icon>
               <Text>Explore</Text>
            </LinkedItem>

            <LinkedItem>
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

            <LinkedItem>
               <Icon>
                  <CreatePostIcon />
               </Icon>
               <Text>Create</Text>
            </LinkedItem>

            <BottunItem>
               <ProfilePhoto src={NoProfilePhoto} />
               <Text>Profile</Text>
            </BottunItem>
         </Links>

         <MoreOptions>
            <BottunItem>
               <Icon>
                  <ThemeChangeIcon />
               </Icon>
               <Text>Change theme</Text>
            </BottunItem>

            <BottunItem>
               <Icon>
                  <MoreIcon />
               </Icon>
               <Text>More</Text>
            </BottunItem>
         </MoreOptions>
      </Leftside>
   );
};

export default LeftsideMenu;

const Leftside = styled.div`
   padding: 4rem 2.5rem;
   border-right: 0.1rem solid var(--border-color);
`;

const Logo = styled.div``;

const Links = styled.div`
   margin-top: 5rem;
   display: flex;
   flex-direction: column;
   gap: 3rem;
`;

const LinkedItem = styled(Link)`
   text-decoration: none;
   display: flex;
   gap: 2rem;
   align-items: center;
   color: black;
   transition: all 0.15s;

   &:hover {
      div {
         transform: scale(1.15);
      }
   }
`;

const BottunItem = styled.button`
   display: flex;
   align-items: center;
   gap: 2rem;
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

const Text = styled.p``;

const Icon = styled.div`
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
