import { Grid, useTheme, useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import ChosenPostComments from "../../components/ChosenPostComments/ChosenPostComments";
import ChosenPostSileds from "../../components/ChosenPostSileds/ChosenPostSileds";
import CloseButtonIcon from "../../assets/svgs/CloseButtonIcon";
import useChosenPost from "../../api/chosenPost/useChosenPost";
import ChosenModalSkelton from "../../components/Skeletons/ChosenModalSkelton/ChosenModalSkelton";
import useOnClickOutside from "../../hooks/useOnclickOutside";

const ChosenPost = ({ handleClose, chosenDetail, setHasLikedHome, setHasSavedHome, setLikesNumberHome, setFunctionDidRun }) => {
   const [hasLiked, setHasLiked] = useState(false);
   const [hasSaved, setHasSaved] = useState(false);
   const [likesNumber, setLikesNumber] = useState(0);

   const [postDetailRequest, loading, postDetail] = useChosenPost(chosenDetail.id, setHasLiked, setHasSaved, setLikesNumber);
   const outSideRef = useRef();
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("md"));

   useOnClickOutside(outSideRef, handleClose);
   const { templateTheme } = useContext(GeneralInfoContext);

   useEffect(() => {
      postDetailRequest();

      document.body.style.overflow = "hidden";

      return () => {
         document.body.style.overflow = "visible";
      };
   }, []);

   return (
      <Container>
         <Thunk>
            <Wrapper templateTheme={templateTheme} ref={outSideRef}>
               <Grid container sx={{ height: "100%" }}>
                  <Grid item xs={12} md={6} height={isMatch ? "50%" : "100%"}>
                     {loading ? <ChosenModalSkelton /> : <ChosenPostSileds medias={postDetail?.files} />}
                  </Grid>
                  <Grid item xs={12} md={6} height={isMatch ? "50%" : "100%"}>
                     {loading ? (
                        <ChosenModalSkelton />
                     ) : (
                        <ChosenPostComments
                           templateTheme={templateTheme}
                           postDetail={postDetail}
                           postDetailRequest={postDetailRequest}
                           hasLiked={hasLiked}
                           setHasLiked={setHasLiked}
                           hasSaved={hasSaved}
                           setHasSaved={setHasSaved}
                           likesNumber={likesNumber}
                           setLikesNumber={setLikesNumber}
                           setHasLikedHome={setHasLikedHome}
                           setHasSavedHome={setHasSavedHome}
                           setLikesNumberHome={setLikesNumberHome}
                           setFunctionDidRun={setFunctionDidRun}
                        />
                     )}
                  </Grid>
               </Grid>
            </Wrapper>
         </Thunk>

         <CloseButton onClick={handleClose}>
            <CloseButtonIcon />
         </CloseButton>
      </Container>
   );
};

export default ChosenPost;

const Container = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   z-index: 10;
`;

const Thunk = styled.div`
   background-color: rgba(58, 58, 58, 0.6);
   width: 100%;
   height: 100%;
   padding: 7rem 13rem;
   box-sizing: border-box;

   @media (max-width: 900px) {
      padding: 5rem 2rem;
   }
`;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   width: 100%;
   height: 100%;

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const CloseButton = styled.div`
   position: fixed;
   top: 2rem;
   right: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: gray;
   padding: 0.2rem;
   border-radius: 0.5rem;

   @media (max-width: 900px) {
      top: 2.5rem;
      right: 2.5rem;
   }
`;
