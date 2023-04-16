import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import VolumeOffIcon from "../../assets/svgs/VolumeOffIcon";
import VolumeUpIcon from "../../assets/svgs/VolumeUpIcon";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

const HomeVideo = ({ videoSource }) => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [isMute, setIsMute] = useState(false);
   const [isPlaying, setIsPlaying] = useState(false);
   const videoRef = useRef();

   const pauseHandler = (e) => {
      e.target.pause();
      setIsPlaying(false);
   };

   const playHandler = () => {
      videoRef.current.play();
      setIsPlaying(true);
   };

   return (
      <Wrapper templateTheme={templateTheme}>
         <Video
            src={`https://djangoinsta.pythonanywhere.com${videoSource}`}
            preload="metadata"
            ref={videoRef}
            muted={isMute}
            loop
            onClick={pauseHandler}
         />

         <SoundIcon onClick={() => setIsMute((prev) => !prev)}>{isMute ? <VolumeOffIcon /> : <VolumeUpIcon />}</SoundIcon>

         {!isPlaying && (
            <Cover onClick={playHandler}>
               <PlayArrowRoundedIcon fontSize="inherit" sx={{ cursor: "pointer" }} />
            </Cover>
         )}
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

const SoundIcon = styled.div`
   position: absolute;
   bottom: 3rem;
   right: 1rem;
   font-size: 2rem;
   background-color: #808080;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 50%;
   cursor: pointer;
   padding: 0.5rem;
`;

const Cover = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.4);
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 15rem;
`;
