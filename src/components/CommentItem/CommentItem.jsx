import React, { useState } from "react";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import useDeleteComment from "../../api/comment/useDeleteComment";
import { LoadingButton } from "@mui/lab";

const CommentItem = ({ detail, templateTheme, postDetailRequest }) => {
   const [showDeletModal, setShowDeletModal] = useState(false);
   const [deleteCommentRequest, deleteLoading] = useDeleteComment(detail.id, postDetailRequest);

   // console.log(detail);

   return (
      <>
         <Wrapper>
            <Header>
               <HeaderImage src={detail?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${detail?.user?.profile_photo}` : noProfile} />
               <HeaderUsername to={`/profile/${detail?.user?.username}/posts`}>{detail?.user?.username}</HeaderUsername>
               {detail?.can_delete && (
                  <HeaderIcon onClick={() => setShowDeletModal(true)}>
                     <DeleteForeverIcon />
                  </HeaderIcon>
               )}
            </Header>
            <Text>{detail?.body}</Text>
            <TimeText>{detail?.created === "right now" ? detail?.created : `${detail?.created} ago`}</TimeText>
         </Wrapper>

         {showDeletModal && (
            <DeleteModal>
               <DeleteModalBody templateTheme={templateTheme}>
                  <DeleteModalTitle>Are you sure about delete ?</DeleteModalTitle>
                  <DeleteModalButtons>
                     <DeleteModalConfirm
                        variant="contained"
                        color="info"
                        onClick={() => deleteCommentRequest(setShowDeletModal)}
                        loading={deleteLoading}
                     >
                        Delete
                     </DeleteModalConfirm>
                     <DeleteModalCancel variant="contained" color="error" onClick={() => setShowDeletModal(false)}>
                        Cancel
                     </DeleteModalCancel>
                  </DeleteModalButtons>
               </DeleteModalBody>
            </DeleteModal>
         )}
      </>
   );
};

export default CommentItem;

const Wrapper = styled.div``;

const Header = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

const HeaderImage = styled.img`
   width: 3.2rem;
   height: 3.2rem;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const HeaderUsername = styled(Link)`
   text-decoration: none;
   font-weight: 600;
   font-size: 1.3rem;
`;

const HeaderIcon = styled.div`
   margin-left: auto;
   cursor: pointer;
`;

const Text = styled.p`
   font-size: 1.4rem;
`;

const TimeText = styled.p`
   font-size: 0.9rem;
   color: gray;
   margin-top: 0.4rem;
`;

const DeleteModal = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 11;
   background-color: rgba(0, 0, 0, 0.5);
`;

const DeleteModalBody = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 2rem;
   background-color: ${({ templateTheme }) => templateTheme};
   padding: 2rem;
   border-radius: 1rem;
`;

const DeleteModalTitle = styled.p``;

const DeleteModalButtons = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 2rem;
`;

const DeleteModalConfirm = styled(LoadingButton)`
   font-size: 1.1rem !important;
`;

const DeleteModalCancel = styled(Button)`
   font-size: 1.1rem !important;
`;
