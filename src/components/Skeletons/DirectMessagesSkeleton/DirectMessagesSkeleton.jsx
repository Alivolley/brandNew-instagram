import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const DirectMessagesSkeleton = () => {
   return (
      <Wrapper>
         <TextRight>
            <Skeleton variant="text" width="100%" height={70} sx={{ backgroundColor: '#80808083', borderRadius: 5 }} animation="pulse" />
         </TextRight>

         <TextLeft>
            <Skeleton variant="circular" width={27} height={27} sx={{ backgroundColor: '#80808083', marginTop: '2rem' }} animation="pulse" />
            <Skeleton variant="text" width="70%" height={70} sx={{ backgroundColor: '#80808083', borderRadius: 5 }} animation="pulse" />
         </TextLeft>
         <TextRight>
            <Skeleton variant="text" width="100%" height={70} sx={{ backgroundColor: '#80808083', borderRadius: 5 }} animation="pulse" />
         </TextRight>

         <TextLeft>
            <Skeleton variant="circular" width={27} height={27} sx={{ backgroundColor: '#80808083', marginTop: '2rem' }} animation="pulse" />
            <Skeleton variant="text" width="70%" height={70} sx={{ backgroundColor: '#80808083', borderRadius: 5 }} animation="pulse" />
         </TextLeft>
         <TextRight>
            <Skeleton variant="text" width="100%" height={70} sx={{ backgroundColor: '#80808083', borderRadius: 5 }} animation="pulse" />
         </TextRight>

         <TextLeft>
            <Skeleton variant="circular" width={27} height={27} sx={{ backgroundColor: '#80808083', marginTop: '2rem' }} animation="pulse" />
            <Skeleton variant="text" width="70%" height={70} sx={{ backgroundColor: '#80808083', borderRadius: 5 }} animation="pulse" />
         </TextLeft>
      </Wrapper>
   );
};

export default DirectMessagesSkeleton;

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

const TextRight = styled.p`
   margin-left: auto;
   width: 69%;
`;

const TextLeft = styled.p`
   display: flex;
   align-items: center;
   gap: 0.1rem;
   margin-right: auto;
   width: 69%;
`;
