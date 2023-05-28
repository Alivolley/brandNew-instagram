import React from 'react';
import styled from 'styled-components';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CreatePostItem = ({ detail, setChosenFiles, setChosenFilesUrl }) => {
   const deleteHandler = () => {
      setChosenFilesUrl(prev => prev.filter(url => url !== detail));
      setChosenFiles(prev => prev.filter(item => item !== detail.mainFile));
   };

   return (
      <Wrapper onClick={deleteHandler}>
         {detail.extention.includes('image') ? <Image src={detail.source} /> : <Video src={detail.source} />}

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
   border: 0.1rem solid var(--border-color);
   cursor: pointer;
   aspect-ratio: 1 / 1;

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
