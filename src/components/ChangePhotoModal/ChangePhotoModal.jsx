import React from "react";
import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { LoadingButton } from "@mui/lab";
import useEditProfilePhoto from "../../api/setting/useEditProfilePhoto";
import useDeleteProfilePhoto from "../../api/setting/useDeleteProfilePhoto";

const ChangePhotoModal = ({ show, handleClose, templateTheme, isMatch, getInfoEdit }) => {
   const [editProfilePhotoRequest, editReqloading] = useEditProfilePhoto();
   const [deleteProfilePhotoRequest, deleteLoading] = useDeleteProfilePhoto();

   const changePhotoHandler = (e) => {
      const formData = new FormData();
      formData.append("profile_photo", e.target.files[0]);
      editProfilePhotoRequest(formData, getInfoEdit, handleClose);
   };

   const deleteProfileHandler = () => {
      deleteProfilePhotoRequest(getInfoEdit, handleClose);
   };

   return (
      <Dialog onClose={handleClose} open={show}>
         <Wrapper templateTheme={templateTheme} isMatch={isMatch}>
            <Title templateTheme={templateTheme}>Change Profile Photo</Title>
            <hr />
            <UploadButton variant="none" loading={editReqloading}>
               <UploadInput type="file" accept="image/*" onChange={changePhotoHandler} />
               <UploadText hidden={editReqloading}>Upload photo</UploadText>
            </UploadButton>
            <hr />
            <RemoveButton variant="none" onClick={deleteProfileHandler} loading={deleteLoading}>
               Remove Current Photo
            </RemoveButton>
            <hr />
            <CancelButton templateTheme={templateTheme} onClick={handleClose}>
               Cancel
            </CancelButton>
         </Wrapper>
      </Dialog>
   );
};

export default ChangePhotoModal;

const Wrapper = styled.div`
   width: ${({ isMatch }) => (isMatch ? "100%" : "33rem")};
   display: flex;
   flex-direction: column;
   background-color: ${({ templateTheme }) => templateTheme};
   border: 0.1rem solid var(--border-color);
`;

const Title = styled.p`
   font-weight: 500;
   padding-bottom: 2rem;
   margin: 1rem 0;
   font-size: 1.9rem;
   text-align: center;
   padding: 2rem;
   color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
`;

const UploadButton = styled(LoadingButton)`
   position: relative;
   cursor: pointer;
   text-align: center;
   height: 5.5rem;
   text-transform: none !important;
`;

const UploadInput = styled.input`
   cursor: pointer;
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
   opacity: 0;
`;

const UploadText = styled.p`
   cursor: pointer;
   font-size: 1.4rem !important;
   font-weight: 700;
   color: var(--blueBtn-color);
`;

const RemoveButton = styled(LoadingButton)`
   height: 5.5rem;
   font-size: 1.4rem !important;
   font-weight: 700 !important;
   text-transform: none !important;
   color: var(--validation-color) !important;
`;

const CancelButton = styled.button`
   background-color: transparent;
   border: none;
   height: 5.5rem;
   cursor: pointer;
   color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
`;
