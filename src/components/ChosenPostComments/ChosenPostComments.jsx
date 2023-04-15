import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import testPhoto from "./../../assets/Images/testPhoto.png";
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

const ChosenPostComments = ({ templateTheme, containerHeight }) => {
   const [commentValue, setCommentValue] = useState("");
   const [showEmojies, setShowEmojies] = useState(false);
   const inputRef = useRef();
   const emojiRef = useRef();

   useOnClickOutside(emojiRef, () => setShowEmojies(false));

   return (
      <Wrapper templateTheme={templateTheme} containerHeight={containerHeight}>
         <Header>
            <HeaderImage src={testPhoto} />
            <HeaderUsername to={`/`}>ali-azghandi</HeaderUsername>
            <HeaderIcon>some</HeaderIcon>
         </Header>

         <Body>
            <Caption>
               <CaptionHeader>
                  <CaptionImage src={testPhoto} />
                  <CaptionUsername to={`/`}>ali-azghandi</CaptionUsername>
               </CaptionHeader>
               <CaptionText>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad ex inventore fugit, odit ea, nihil a ab, unde alias quia officia. Nobis
                  totam quis iste cumque saepe tempore aspernatur minus.
               </CaptionText>
            </Caption>

            <CommentsSection>
               <CommentItem />
               <CommentItem />
               <CommentItem />
               <CommentItem />
               <CommentItem />
               <CommentItem />
               <CommentItem />
            </CommentsSection>
         </Body>

         <Footer>
            <FooterIcons>
               <LikeIconWrapper>
                  <LikeIcon />
                  {/* <LikeIconFilled /> */}
               </LikeIconWrapper>

               <CommentIconWrapper onClick={() => inputRef?.current?.focus()}>
                  <AddComment />
               </CommentIconWrapper>

               <SaveIconsWrapper>
                  <SavePost />
                  {/* <SavePostFilled /> */}
               </SaveIconsWrapper>
            </FooterIcons>
            <CommentSection>
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

               <PostButton variant="text" size="small" loading={false} type="submit">
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
   );
};

export default ChosenPostComments;

const Wrapper = styled.div`
   background-color: ${({ templateTheme }) => templateTheme};
   position: relative;
   height: ${({ containerHeight }) => (containerHeight ? `${containerHeight}px` : "50rem")};
   width: 100%;
   max-height: 90vh;
   overflow: auto;
   box-sizing: border-box;
   border-left: 0.1rem solid var(--border-color);

   @media (max-width: 900px) {
      height: 45vh;
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

const HeaderIcon = styled.div`
   margin-left: auto;
   cursor: pointer;
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
   width: 18rem;

   @media (max-width: 900px) {
      width: 12rem;
   }
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
