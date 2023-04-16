import React from "react";
import styled from "styled-components";

const HomeVideo = ({ videoSource }) => {
   return (
      <Wrapper>
         <Video src={`https://djangoinsta.pythonanywhere.com${videoSource}`} preload="metadata" />
      </Wrapper>
   );
};

export default HomeVideo;

const Wrapper = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   * {
      fill: ${({ templateTheme }) => templateTheme};
   }
`;

const Video = styled.video`
   max-width: 100%;
   max-height: 100%;
   object-fit: contain;
   object-position: center center;
   border-radius: 0.5rem;
`;
