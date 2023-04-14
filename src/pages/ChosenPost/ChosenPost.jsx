import { useMediaQuery, useTheme } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useContext } from "react";
import styled from "styled-components";
import GeneralInfoContext from "../../contexts/GeneralInfoContext";
import ChosenPostComments from "../../components/ChosenPostComments/ChosenPostComments";
import ChosenPostSileds from "../../components/ChosenPostSileds/ChosenPostSileds";

const ChosenPost = ({ show, handleClose, chosenDetail }) => {
   const theme = useTheme();
   const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
   const { templateTheme } = useContext(GeneralInfoContext);

   return (
      <Modal
         open={show}
         onClose={handleClose}
         sx={{
            backdropFilter: "brightness(60%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMatch ? "1.5rem" : "15rem",
         }}
      >
         <Wrapper templateTheme={templateTheme}>
            <ChosenPostSileds />
            <ChosenPostComments templateTheme={templateTheme} />
         </Wrapper>
      </Modal>
   );
};

export default ChosenPost;

const Wrapper = styled.div`
   box-sizing: border-box;
   display: flex;
   justify-content: center;
   background-color: ${({ templateTheme }) => templateTheme};
   color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   max-height: 90vh;
   overflow: hidden;
   border: none;
   outline: none;

   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;
