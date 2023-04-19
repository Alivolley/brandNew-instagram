import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import AddComment from "../../assets/svgs/AddComment";
import SavePost from "../../assets/svgs/SavePost";
import LikeIcon from "../../assets/svgs/LikeIcon";
import LikeIconFilled from "../../assets/svgs/LikeIconFilled";
import SavePostFilled from "../../assets/svgs/SavePostFilled";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { LoadingButton } from "@mui/lab";
import CommentItem from "../CommentItem/CommentItem";
import EmojiPicker from "emoji-picker-react";
import useOnClickOutside from "../../hooks/useOnclickOutside";
import useDeletePost from "../../api/deletePost/useDeletePost";
import { Button } from "@mui/material";
import useFollow from "../../api/follow/useFollow";
import useCreateComment from "../../api/comment/useCreateComment";
import useLike from "../../api/like/useLike";
import useSave from "../../api/save/useSave";

const ChosenPostComments = ({
   templateTheme,
   postDetail,
   postDetailRequest,
   hasLiked,
   setHasLiked,
   hasSaved,
   setHasSaved,
   setHasLikedHome,
   setHasSavedHome,
   setLikesNumberHome,
}) => {
   const [commentValue, setCommentValue] = useState("");
   const [showEmojies, setShowEmojies] = useState(false);
   const [showDeletModal, setShowDeletModal] = useState(false);
   const [deletePostRequest, deleteLoading] = useDeletePost(postDetail.id);
   const [followRequest, loading] = useFollow();
   const [createCommentRequest, creatCommentLoading] = useCreateComment();
   const [likeRequest] = useLike();
   const [saveRequest] = useSave();
   const inputRef = useRef();
   const emojiRef = useRef();

   useOnClickOutside(emojiRef, () => setShowEmojies(false));

   // console.log(postDetail);

   const deletePostHandler = () => {
      setShowDeletModal(false);
      deletePostRequest();
   };

   const followUser = () => {
      followRequest(postDetail?.user?.id, postDetailRequest);
   };

   const createCommentHandler = (e) => {
      e.preventDefault();
      if (commentValue) {
         createCommentRequest(commentValue, postDetail?.id, setCommentValue, postDetailRequest);
      }
   };

   const likeHandler = () => {
      setHasLiked((prev) => !prev);
      setHasLikedHome &&
         setHasLikedHome((prev) => {
            setLikesNumberHome((prevNum) => (prev ? prevNum - 1 : prevNum + 1));
            return !prev;
         });

      likeRequest(postDetail.id);
   };

   const saveHandler = () => {
      setHasSaved((prev) => !prev);
      setHasSavedHome && setHasSavedHome((prev) => !prev);
      saveRequest(postDetail.id);
   };

   return (
      <>
         <Wrapper templateTheme={templateTheme}>
            <Header>
               <HeaderImage
                  src={postDetail?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${postDetail?.user?.profile_photo}` : noProfile}
               />
               <HeaderUsername to={`/profile/${postDetail?.user?.username}/posts`}>{postDetail?.user?.username}</HeaderUsername>

               {postDetail?.user?.username === postDetail?.auth_username && (
                  <HeaderIcon variant="text" color="error" loading={deleteLoading} onClick={() => setShowDeletModal(true)}>
                     Delete post
                  </HeaderIcon>
               )}

               {postDetail?.user?.username !== postDetail?.auth_username &&
                  (postDetail?.is_following ? (
                     <FollowButton variant="text" color="error" size="small" loading={loading} onClick={followUser}>
                        Unfollow
                     </FollowButton>
                  ) : (
                     <FollowButton variant="text" color="info" size="small" loading={loading} onClick={followUser}>
                        Follow
                     </FollowButton>
                  ))}
            </Header>

            <Body>
               <Caption>
                  <CaptionHeader>
                     <CaptionImage
                        src={postDetail?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${postDetail?.user?.profile_photo}` : noProfile}
                     />
                     <CaptionUsername to={`/profile/${postDetail?.user?.username}/posts`}>{postDetail?.user?.username}</CaptionUsername>
                  </CaptionHeader>
                  <CaptionText>{postDetail?.caption}</CaptionText>
               </Caption>

               <CommentsSection>
                  {postDetail?.comments?.map((comment) => (
                     <CommentItem key={comment.id} detail={comment} templateTheme={templateTheme} postDetailRequest={postDetailRequest} />
                  ))}
               </CommentsSection>
            </Body>

            <Footer>
               <FooterIcons>
                  <LikeIconWrapper onClick={likeHandler}>{hasLiked ? <LikeIconFilled /> : <LikeIcon />}</LikeIconWrapper>

                  <CommentIconWrapper onClick={() => inputRef?.current?.focus()}>
                     <AddComment />
                  </CommentIconWrapper>

                  <SaveIconsWrapper onClick={saveHandler}>{hasSaved ? <SavePostFilled /> : <SavePost />}</SaveIconsWrapper>
               </FooterIcons>

               <CommentSection onSubmit={createCommentHandler}>
                  <EmojiIcon onClick={() => setShowEmojies(true)}>
                     <SentimentSatisfiedAltIcon fontSize="inherit" />
                  </EmojiIcon>

                  <Input
                     type="text"
                     placeholder="Add a comment..."
                     ref={inputRef}
                     value={commentValue}
                     onChange={(e) => setCommentValue(e.target.value)}
                  />

                  <PostButton variant="text" size="small" loading={creatCommentLoading} type="submit">
                     Post
                  </PostButton>

                  {showEmojies && (
                     <EmojiWrapper ref={emojiRef}>
                        <EmojiPicker
                           width="100%"
                           height="100%"
                           theme={templateTheme === "white" ? "light" : "dark"}
                           skinTonesDisabled={true}
                           searchDisabled={true}
                           suggestedEmojisMode="recent"
                           onEmojiClick={(emo) => setCommentValue((prev) => prev.concat(emo.emoji))}
                        />
                     </EmojiWrapper>
                  )}
               </CommentSection>
            </Footer>
         </Wrapper>

         {showDeletModal && (
            <DeleteModal>
               <DeleteModalBody templateTheme={templateTheme}>
                  <DeleteModalTitle>Are you sure about delete ?</DeleteModalTitle>
                  <DeleteModalButtons>
                     <DeleteModalConfirm variant="contained" color="info" onClick={deletePostHandler}>
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

export default ChosenPostComments;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   position: relative;
   height: 100%;
   width: 100%;
   border-left: 0.1rem solid var(--border-color);

   @media (max-width: 900px) {
      border-top: 0.1rem solid var(--border-color);
      border-left: none;
   }
`;

const Header = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   display: flex;
   align-items: center;
   gap: 1rem;
   padding: 1.5rem;
   border-bottom: 0.1rem solid var(--border-color);
`;

const HeaderImage = styled.img`
   width: 3.2rem;
   height: 3.2rem;
   border-radius: 50%;
   object-fit: contain;
   object-position: center center;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const HeaderUsername = styled(Link)`
   text-decoration: none;
   font-weight: 600;
   font-size: 1.3rem;
`;

const HeaderIcon = styled(LoadingButton)`
   margin-left: auto !important;
   padding: 0 !important;
   text-transform: none !important;
   font-size: 1rem !important;
   cursor: pointer;
`;

const FollowButton = styled(LoadingButton)`
   margin-left: auto !important;
   font-size: 1.1rem !important;
   text-transform: none !important;
`;

const Body = styled.div`
   position: absolute;
   top: 6.4rem;
   left: 0;
   right: 0;
   bottom: 12rem;
   overflow: auto;
   padding: 1.5rem;
`;

const CommentsSection = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   margin-top: 2rem;
`;

const Footer = styled.div`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   border-top: 0.1rem solid var(--border-color);
`;

const FooterIcons = styled.div`
   display: flex;
   align-items: center;
   gap: 1.5rem;
   padding: 1.5rem;

   svg {
      cursor: pointer;
   }
`;

const LikeIconWrapper = styled.div``;

const CommentIconWrapper = styled.div``;

const SaveIconsWrapper = styled.div`
   margin-left: auto;
`;

const CommentSection = styled.form`
   position: relative;
   display: flex;
   align-items: center;
   gap: 1rem;
   padding: 1.5rem;
   border-top: 0.1rem solid var(--border-color);
`;

const EmojiIcon = styled.div`
   font-size: 2.2rem;
   cursor: pointer;
`;

const EmojiWrapper = styled.div`
   position: absolute;
   bottom: 125%;
   left: 0;
   width: 30rem;
   height: 30rem;

   .epr-preview {
      display: none;
   }
`;

const Input = styled.input`
   font-size: 1.4rem;
   border: none;
   outline: none;
   background-color: transparent;
   width: 100%;
`;

const PostButton = styled(LoadingButton)`
   margin-left: auto !important;
   text-transform: none !important;
   font-size: 1.4rem !important;
   padding: 0 !important;
`;

const Caption = styled.div``;

const CaptionHeader = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
`;

const CaptionImage = styled(HeaderImage)``;

const CaptionUsername = styled(HeaderUsername)``;

const CaptionText = styled.p`
   font-size: 1.4rem;
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

const DeleteModalConfirm = styled(Button)`
   font-size: 1.1rem !important;
`;

const DeleteModalCancel = styled(Button)`
   font-size: 1.1rem !important;
`;
