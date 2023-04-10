import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import ProfileTabs from "../../components/ProfileTabs/ProfileTabs";
import { Outlet, useParams } from "react-router-dom";
import useProfile from "../../api/profile/useProfile";

const Profile = () => {
   const { username } = useParams();
   const { templateTheme } = useContext(GeneralInfoContext);
   const [profileDetailRequest, loading, profileInfos] = useProfile(username);

   useEffect(() => {
      profileDetailRequest();
   }, [username]);

   return (
      <Wrapper templateTheme={templateTheme}>
         <ProfileHeader templateTheme={templateTheme} />
         <ProfileTabs templateTheme={templateTheme} />
         <Outlet />
      </Wrapper>
   );
};

export default Profile;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
`;
