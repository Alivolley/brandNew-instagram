import React from "react";
import styled from "styled-components";

const HomeVideo = ({ videoSource }) => {
   return <Wrapper src={`https://djangoinsta.pythonanywhere.com${videoSource}`} preload="metadata" />;
};

export default HomeVideo;

const Wrapper = styled.video`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 0.5rem;

   * {
      fill: ${({ templateTheme }) => templateTheme};
   }
`;
