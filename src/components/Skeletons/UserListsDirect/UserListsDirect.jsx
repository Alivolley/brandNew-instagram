import { Skeleton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const UserListsDirect = () => {
   const testArray = Array.from({ length: 10 }, (_, index) => index);

   return (
      <Body>
         {testArray.map(item => (
            <Wrapper key={item}>
               <Skeleton variant="circular" width={56} height={56} sx={{ backgroundColor: '#80808083' }} animation="pulse" />
               <Container>
                  <Skeleton variant="text" width={90} height={21} sx={{ backgroundColor: '#80808083' }} animation="pulse" />
                  <Skeleton variant="text" width={130} height={21} sx={{ backgroundColor: '#80808083' }} animation="pulse" />
               </Container>
            </Wrapper>
         ))}
      </Body>
   );
};

export default UserListsDirect;

const Body = styled.div`
   display: flex;
   flex-direction: column;
   padding: 1.5rem;
   gap: 2rem;
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;

   @media (max-width: 900px) {
      gap: 0.8rem;
   }
`;

const Container = styled.div``;
