import React from "react";
import styled from "styled-components";

const PostVideo = ({ videoSource }) => {
   return <Video src={`https://djangoinsta.pythonanywhere.com${videoSource}`} preload="metadata" />;
};

export default PostVideo;

const Video = styled.video`
   max-width: 100%;
   max-height: 100%;
   object-fit: contain;
   object-position: center center;
`;
