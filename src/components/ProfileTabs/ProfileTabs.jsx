import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PostsTab from "../../assets/svgs/PostsTab";
import SavedTab from "../../assets/svgs/SavedTab";

const ProfileTabs = ({ templateTheme }) => {
   return (
      <Wrapper templateTheme={templateTheme}>
         <Tab to="posts">
            <PostsTab />
            POSTS
         </Tab>
         <Tab to="saved">
            <SavedTab />
            SAVED
         </Tab>
      </Wrapper>
   );
};

export default ProfileTabs;

const Wrapper = styled.div`
   border-top: 0.1rem solid var(--border-color);
   margin: 15rem 2rem 6rem 2rem;
   display: flex;
   justify-content: center;
   gap: 5rem;

   .active {
      border-top: 0.15rem solid ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
      fill: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Tab = styled(NavLink)`
   text-decoration: none;
   display: flex;
   align-items: center;
   gap: 0.5rem;
   color: rgb(115, 115, 115);
   fill: rgb(115, 115, 115);
   font-size: 1.2rem;
   padding-top: 1.5rem;
   box-sizing: border-box;
   letter-spacing: 0.1rem;
   font-weight: 600;
`;
