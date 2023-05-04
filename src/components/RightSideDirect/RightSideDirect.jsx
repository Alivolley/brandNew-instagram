import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import noProfile from './../../assets/Images/NoProfilePhoto.jpg';
import GeneralInfoContext from '../../contexts/GeneralInfoContext';
import SentMessage from '../SentMessage/SentMessage';
import RecivedMessage from '../RecivedMessage/RecivedMessage';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import EmojiPicker from 'emoji-picker-react';
import useOnClickOutside from '../../hooks/useOnclickOutside';
import SendIcon from '@mui/icons-material/Send';
import useUserDirect from '../../api/userDirect/useUserDirect';
// import ReconnectingWebSocket from 'reconnecting-websocket';

const RightSideDirect = () => {
   const [reload, setReload] = useState(false);
   const { templateTheme } = useContext(GeneralInfoContext);
   const { username } = useParams();

   const [showEmojis, setShowEmojis] = useState(false);
   const [messageValue, setMessageValue] = useState('');
   const [getDirectUserData, userData] = useUserDirect(username);

   const bodyRef = useRef(null);
   const emojiRef = useRef();
   // const chatSocketRef = useRef(null);

   useEffect(() => {
      getDirectUserData();
   }, []);

   // useEffect(() => {
   //    if (chatSocketRef?.current) {
   //       chatSocketRef.current = new ReconnectingWebSocket(`wss://djangoinsta.pythonanywhere.com/ws/chat/${username}/`);

   //       chatSocketRef.current.onopen = () => {
   //          chatSocketRef.current.send(JSON.stringify({ command: 'fetch_message', chat_id: userData?.id }));
   //       };

   //       chatSocketRef.current.onmessage = e => {
   //          console.log(e);
   //       };

   //       chatSocketRef.current.onclose = () => {
   //          console.error('Chat socket closed unexpectedly');
   //       };

   //       // Clean up when the component unmounts
   //       return () => {
   //          chatSocketRef.current.close();
   //       };
   //    }
   // }, [chatSocketRef?.current]);

   const sendTheMessage = e => {
      e.preventDefault();

      // chatSocketRef.current.send(
      //    JSON.stringify({
      //       message: messageValue,
      //       command: 'new_message',
      //       chat_id: userData?.id,
      //       username,
      //    })
      // );
   };

   useEffect(() => {
      const element = bodyRef.current;
      element.scrollTop = element.scrollHeight;
   }, [reload]);

   useOnClickOutside(emojiRef, () => setShowEmojis(false));

   return (
      <Wrapper>
         <Header templateTheme={templateTheme}>
            <ImageWrapper to={`/profile/${username}/posts`}>
               <Image
                  src={userData?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${userData?.user?.profile_photo}` : noProfile}
                  onLoad={() => setReload(prev => !prev)}
               />
            </ImageWrapper>
            <HeaderUsername to={`/profile/${username}/posts`}>{username}</HeaderUsername>
         </Header>

         <Body ref={bodyRef}>
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <SentMessage templateTheme={templateTheme} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <SentMessage templateTheme={templateTheme} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <SentMessage templateTheme={templateTheme} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <SentMessage templateTheme={templateTheme} />
            <SentMessage templateTheme={templateTheme} />
            <SentMessage templateTheme={templateTheme} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <SentMessage templateTheme={templateTheme} />
            <SentMessage templateTheme={templateTheme} />
            <RecivedMessage templateTheme={templateTheme} userData={userData} />
            <SentMessage templateTheme={templateTheme} />
            <SentMessage templateTheme={templateTheme} />
         </Body>

         <MessageSection onSubmit={sendTheMessage}>
            <EmojiIcon onClick={() => setShowEmojis(true)}>
               <SentimentSatisfiedAltIcon fontSize="inherit" />
            </EmojiIcon>

            <Input type="text" placeholder="Message..." value={messageValue} onChange={e => setMessageValue(e.target.value)} />

            <SendButton variant="text" size="small" type="submit">
               <SendIcon fontSize="large" />
            </SendButton>

            {showEmojis && (
               <EmojiWrapper ref={emojiRef}>
                  <EmojiPicker
                     width="100%"
                     height="100%"
                     theme={templateTheme === 'white' ? 'light' : 'dark'}
                     skinTonesDisabled={true}
                     searchDisabled={true}
                     suggestedEmojisMode="recent"
                     onEmojiClick={emo => setMessageValue(prev => prev.concat(emo.emoji))}
                  />
               </EmojiWrapper>
            )}
         </MessageSection>
      </Wrapper>
   );
};

export default RightSideDirect;

const Wrapper = styled.div`
   position: relative;
   width: 25rem;
   height: 100%;

   @media (min-width: 330px) {
      width: 28rem;
   }

   @media (min-width: 360px) {
      width: 31rem;
   }

   @media (min-width: 390px) {
      width: 34rem;
   }

   @media (min-width: 420px) {
      width: 37rem;
   }

   @media (min-width: 600px) {
      width: 25rem;
   }

   @media (min-width: 700px) {
      width: 30rem;
   }

   @media (min-width: 1100px) {
      width: 38rem;
   }

   @media (min-width: 1200px) {
      width: 45rem;
   }

   @media (min-width: 1300px) {
      width: 55rem;
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
   padding: 1.7rem 2rem;
   border-bottom: 0.1rem solid var(--border-color);
   background-color: ${({ templateTheme }) => templateTheme};
`;

const ImageWrapper = styled(Link)`
   width: 2.4rem;
   height: 2.4rem;
`;

const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const HeaderUsername = styled(Link)`
   font-weight: 600;
   font-size: 1.6rem;
   text-decoration: none;
`;

const Body = styled.div`
   position: absolute;
   top: 5.9rem;
   left: 0;
   right: 0;
   width: 100%;
   bottom: 7.4rem;
   padding: 2rem 1.5rem;
   display: flex;
   flex-direction: column;
   gap: 1rem;
   overflow: auto;

   @media (max-width: 600px) {
      padding: 0 1.5rem;
   }
`;

const MessageSection = styled.form`
   position: absolute;
   bottom: 2rem;
   right: 2rem;
   left: 2rem;
   display: flex;
   align-items: center;
   gap: 1rem;
   padding: 1rem 1.5rem;
   border: 0.1rem solid var(--border-color);
   border-radius: 3rem;

   @media (max-width: 600px) {
      bottom: 0;
   }
`;

const EmojiIcon = styled.div`
   font-size: 2.2rem;
   cursor: pointer;
`;

const EmojiWrapper = styled.div`
   position: absolute;
   bottom: 100%;
   left: 0;
   width: 30rem;
   height: 30rem;

   .epr-preview {
      display: none;
   }
`;

const Input = styled.textarea`
   resize: none;
   font-size: 1.4rem;
   border: none;
   outline: none;
   background-color: transparent;
   width: 100%;
   height: 2.5rem;
`;

const SendButton = styled.div`
   margin-left: auto !important;
   text-transform: none !important;
   font-size: 1.4rem !important;
   padding: 0 !important;
   cursor: pointer;
`;
