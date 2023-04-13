import { Grid } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import CreatePostItem from "../../components/CreatePostItem/CreatePostItem";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";

const Create = () => {
   const { templateTheme } = useContext(GeneralInfoContext);
   const [chosenFiles, setChosenFiles] = useState([]);
   const [chosenFilesUrl, setChosenFilesUrl] = useState([]);
   const inputRef = useRef();

   const manageFile = (e) => {
      const file = e.target.files[0];
      file && setChosenFiles((prev) => [...prev, file]);

      const objectUrl = URL.createObjectURL(file);
      objectUrl && setChosenFilesUrl((prev) => [...prev, { source: objectUrl, mainFile: file, extention: file.type }]);

      inputRef.current.value = null;
   };

   const clearAll = () => {
      setChosenFiles([]);
      setChosenFilesUrl([]);
   };

   return (
      <Wrapper templateTheme={templateTheme}>
         <ChoosePost>
            <Title>Chosen files ({chosenFiles.length}/10)</Title>

            {chosenFiles.length ? (
               <Grid container spacing={1.5} columns={10}>
                  {chosenFilesUrl.map((file) => (
                     <Grid item xs={2} key={file.source}>
                        <CreatePostItem detail={file} setChosenFiles={setChosenFiles} setChosenFilesUrl={setChosenFilesUrl} />
                     </Grid>
                  ))}
               </Grid>
            ) : (
               <NoFile>Please choose your files</NoFile>
            )}

            <ButtonsContainer>
               <InputWrapper>
                  <InputTitle>Choose file</InputTitle>
                  <Input
                     type="file"
                     accept="image/*, video/*"
                     disabled={chosenFiles.length === 10 ? true : false}
                     onChange={manageFile}
                     ref={inputRef}
                  />
               </InputWrapper>

               <RemoveAllBtn onClick={clearAll} disabled={!chosenFiles.length ? true : false}>
                  Remove all
               </RemoveAllBtn>
            </ButtonsContainer>
         </ChoosePost>

         <CaptionPart>
            <Textarea placeholder="Caption"></Textarea>

            <SendButton>Post</SendButton>
         </CaptionPart>
      </Wrapper>
   );
};

export default Create;

const Wrapper = styled.div`
   padding: 1.5rem;
   max-width: 100rem;
   margin: 0 auto;

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }

   @media (min-width: 900px) {
      margin-top: 3rem;
   }

   textarea {
      background-color: ${({ templateTheme }) => (templateTheme === "white" ? "white" : " rgb(38, 38, 38)")};
   }
`;

const ChoosePost = styled.section`
   border-bottom: 0.1rem solid var(--border-color);
   padding-bottom: 5rem;
`;

const Title = styled.p`
   font-weight: 500;
   margin-bottom: 4rem;

   @media (min-width: 900px) {
      font-size: 2rem;
   }
`;

const NoFile = styled.p``;

const ButtonsContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 5rem;
`;

const InputWrapper = styled.div`
   position: relative;
   text-align: center;
   width: fit-content;
   padding: 0.5rem 1.5rem;
   border-radius: 0.8rem;
   background-color: #0288d1;

   @media (min-width: 900px) {
      padding: 1.1rem 2.6rem;
   }
`;

const RemoveAllBtn = styled.button`
   padding: 0.5rem 1.5rem;
   border-radius: 0.8rem;
   background-color: #d32f2f;
   border: none;
   color: white;
   font-size: 1.5rem;

   :disabled {
      background-color: rgb(239, 239, 239);
      color: black;
   }

   @media (min-width: 900px) {
      padding: 1.1rem 2.6rem;
   }
`;

const Input = styled.input`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   opacity: 0;
`;

const CaptionPart = styled.section`
   display: flex;
   flex-direction: column;
   margin-top: 5rem;
   gap: 3rem;
`;

const InputTitle = styled.p`
   font-size: 1.5rem;
   color: white;
`;

const Textarea = styled.textarea`
   resize: vertical;
   height: 12rem;
   padding: 1rem;
   font-size: 1.4rem;
   border-radius: 0.5rem;

   @media (min-width: 600px) {
      height: 20rem;
   }
`;

const SendButton = styled.button`
   width: fit-content;
   padding: 1.1rem 2.6rem;
   border-radius: 0.8rem;
   background-color: #0288d1;
   border: none;
   color: white;
   font-weight: 600;
   font-size: 1.6rem;
   cursor: pointer;
`;
