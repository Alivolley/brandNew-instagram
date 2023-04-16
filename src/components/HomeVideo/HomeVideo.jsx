import React from "react";
import styled from "styled-components";

const HomeVideo = ({ videoSource }) => {
   return <Wrapper src={`https://djangoinsta.pythonanywhere.com${videoSource}`} preload="metadata" />;
};

export default HomeVideo;

const Wrapper = styled.video`
   width: 100%;
   max-height: 60rem;
   object-fit: contain;
   object-position: center center;
   border-radius: 0.5rem;
`;
