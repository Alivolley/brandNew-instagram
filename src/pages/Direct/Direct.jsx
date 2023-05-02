import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import LeftSideDirect from '../../components/LeftSideDirect/LeftSideDirect';
import GeneralInfoContext from '../../contexts/GeneralInfoContext';
import { Outlet, useParams } from 'react-router-dom';
import DirectIntroduce from '../../components/DirectIntroduce/DirectIntroduce';
import { useMediaQuery, useTheme } from '@mui/material';
import useAllDirects from '../../api/allDirects/useAllDirects';

const Direct = () => {
   const { username } = useParams();
   const { templateTheme, userInfos } = useContext(GeneralInfoContext);
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
   const [getAllDirectsRequest, loading, allDirects] = useAllDirects();

   useEffect(() => {
      getAllDirectsRequest();
   }, []);

   return (
      <Wrapper templateTheme={templateTheme}>
         {!isMatch ? (
            <>
               <LeftSideDirect templateTheme={templateTheme} allDirects={allDirects} userInfos={userInfos} loading={loading} />
               <Outlet />
            </>
         ) : isMatch && username ? (
            <Outlet />
         ) : isMatch && !username ? (
            <LeftSideDirect templateTheme={templateTheme} allDirects={allDirects} userInfos={userInfos} loading={loading} />
         ) : null}

         {!username && !isMatch && <DirectIntroduce />}
      </Wrapper>
   );
};

export default Direct;

const Wrapper = styled.div`
   position: relative;
   border: 0.1rem solid var(--border-color);
   height: 90vh;
   margin: 3rem auto 0 auto;
   width: fit-content;
   display: flex;
   background-color: ${({ templateTheme }) => templateTheme};

   * {
      color: ${({ templateTheme }) => (templateTheme === 'white' ? 'black' : 'white')};
      box-sizing: border-box;
   }

   @media (max-width: 900px) {
      margin-top: 0;
      height: 79dvh;
   }

   @media (max-width: 600px) {
      border: none;
   }
`;
