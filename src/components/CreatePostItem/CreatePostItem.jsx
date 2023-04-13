import React, { useRef, useState } from "react";
import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CreatePostItem = ({ detail, setChosenFiles, setChosenFilesUrl }) => {
   // eslint-disable-next-line no-unused-vars
   const [reload, setReload] = useState(false);
   const [containerHeight, setContainerHeight] = useState();
   const containerRef = useRef();

   if (containerRef.current) {
      const observer = new ResizeObserver((entries) => setContainerHeight(entries[0].contentRect.width));
      observer.observe(containerRef.current);
   }

   const deleteHandler = () => {
      setChosenFilesUrl((prev) => prev.filter((url) => url !== detail));
      setChosenFiles((prev) => prev.filter((item) => item !== detail.mainFile));
   };

   return (
      <Wrapper containerHeight={containerHeight} onLoad={(e) => setContainerHeight(e.target.width)} ref={containerRef} onClick={deleteHandler}>
         {detail.extention.includes("image") ? (
            <Image src={detail.source} onLoadedData={() => setReload((prev) => !prev)} />
         ) : (
            <Video src={detail.source} onLoadedData={() => setReload((prev) => !prev)} />
         )}

         <CoverShadow className="delete-cover">
            <DeleteForeverIcon fontSize="inherit" color="inherit" />
         </CoverShadow>
      </Wrapper>
   );
};

export default CreatePostItem;

const Wrapper = styled.div`
   width: 100%;
   position: relative;
   height: ${({ containerHeight }) => `${containerHeight}px`};
   border: 0.1rem solid var(--border-color);
   cursor: pointer;

   &:hover .delete-cover {
      display: flex;
   }
`;

const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center center;
`;

const Video = styled.video`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center center;
`;

const CoverShadow = styled.div`
   position: absolute;
   display: none;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background-color: rgba(0, 0, 0, 0.5);
   justify-content: center;
   align-items: center;
   font-size: 5rem;
   color: white;
   fill: white;
   stroke: white;

   @media (max-width: 600px) {
      font-size: 2.3rem;
   }
`;
