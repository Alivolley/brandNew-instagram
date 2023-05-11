import React from 'react';
import styled from 'styled-components';

const SentMessage = ({ templateTheme, content }) => {
   return (
      <Wrapper>
         <Text templateTheme={templateTheme}>{content}</Text>
      </Wrapper>
   );
};

export default SentMessage;

const Wrapper = styled.div`
   width: 100%;
`;

const Text = styled.p`
   margin-left: auto;
   width: fit-content;
   max-width: 75%;
   background-color: ${({ templateTheme }) => (templateTheme === 'white' ? 'rgba(0, 0, 0, 0.07)' : 'rgba(256,256,256,0.1)')};
   padding: 1.2rem 2rem;
   border-radius: 3rem;
   font-size: 1.35rem;
`;
