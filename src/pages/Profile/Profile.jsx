import React, { useContext } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

const Profile = () => {
   const { templateTheme } = useContext(GeneralInfoContext);

   return (
      <Wrapper templateTheme={templateTheme}>
         <ProfileHeader templateTheme={templateTheme} />
      </Wrapper>
   );
};

export default Profile;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
`;
