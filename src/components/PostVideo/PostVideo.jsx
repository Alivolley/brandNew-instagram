import React from "react";
import styled from "styled-components";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const PostVideo = ({ videoSource }) => {
   return (
      <Wrapper>
         <Video src={`https://djangoinsta.pythonanywhere.com${videoSource}`} preload="metadata" />
         <SoundIcon onClick={() => console.log("object")}>
            <VolumeUpIcon color="inherit" fontSize="inherit" />
            {/* <VolumeOffIcon color="inherit" fontSize="inherit"/> */}
         </SoundIcon>
      </Wrapper>
   );
};

export default PostVideo;

const Wrapper = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const Video = styled.video`
   max-width: 100%;
   max-height: 100%;
   object-fit: contain;
   object-position: center center;
`;

const SoundIcon = styled.div`
   position: absolute;
   bottom: 1rem;
   right: 1rem;
   font-size: 2rem;
   background-color: #80808089;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   cursor: pointer;
`;
