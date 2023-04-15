import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import ChosenPostComments from "../../components/ChosenPostComments/ChosenPostComments";
import ChosenPostSileds from "../../components/ChosenPostSileds/ChosenPostSileds";
import CloseButtonIcon from "../../assets/svgs/CloseButtonIcon";
import useChosenPost from "../../api/chosenPost/useChosenPost";
import ChosenModalSkelton from "../../components/Skeletons/ChosenModalSkelton/ChosenModalSkelton";

const ChosenPost = ({ show, handleClose, chosenDetail }) => {
   const [postDetailRequest, loading, postDetail] = useChosenPost(chosenDetail.id);
   const [containerHeight, setContainerHeight] = useState();

   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
   const { templateTheme } = useContext(GeneralInfoContext);

   useEffect(() => {
      postDetailRequest();
   }, []);

   return (
      <Modal
         open={show}
         onClose={handleClose}
         sx={{
            backdropFilter: "brightness(60%)",
            padding: isMatch ? "5rem 1.5rem" : "3rem 15rem",
         }}
      >
         <Wrapper templateTheme={templateTheme}>
            <Grid container>
               <Grid item xs={12} md={6}>
                  {loading ? <ChosenModalSkelton /> : <ChosenPostSileds setContainerHeight={setContainerHeight} medias={postDetail?.files} />}
               </Grid>
               <Grid item xs={12} md={6}>
                  {loading ? (
                     <ChosenModalSkelton />
                  ) : (
                     <ChosenPostComments templateTheme={templateTheme} containerHeight={containerHeight} postDetail={postDetail} />
                  )}
               </Grid>
            </Grid>
            <CloseButton onClick={handleClose}>
               <CloseButtonIcon />
            </CloseButton>
         </Wrapper>
      </Modal>
   );
};

export default ChosenPost;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   outline: none;
   /* height: 100%; */
   display: flex;
   align-items: center;

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
