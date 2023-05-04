import React from 'react';
import styled from 'styled-components';
import noProfile from './../../assets/Images/NoProfilePhoto.jpg';
import { Link } from 'react-router-dom';

const RecivedMessage = ({ templateTheme, userData }) => {
   return (
      <Wrapper>
         <ImageWrapper to={`/profile/${userData?.user?.username}/posts`}>
            <Image src={userData?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${userData?.user?.profile_photo}` : noProfile} />
         </ImageWrapper>
         <Text templateTheme={templateTheme} s>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum odio fugiat quas voluptate nesciunt recusandae nulla ullam, dolores
            ducimus dicta exercitationem porro quos, iste sint, error repellat veritatis rerum distinctio?
         </Text>
      </Wrapper>
   );
};

export default RecivedMessage;

const Wrapper = styled.div`
   width: 100%;
   display: flex;
   align-items: end;
`;

const ImageWrapper = styled(Link)`
   width: 2.5rem;
   height: 2.5rem;
`;

const Image = styled.img`
   width: 100%;
   height: 100%;
   border-radius: 50%;
   object-fit: contain;
   background-color: black;
   border: 0.1rem solid var(--border-color);
`;

const Text = styled.p`
   margin-right: auto;
   width: fit-content;
   max-width: 75%;
   border: 0.1rem solid;
   border-color: ${({ templateTheme }) => (templateTheme === 'white' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(256,256,256,0.2)')};
   padding: 1.2rem 2rem;
   border-radius: 3rem;
   font-size: 1.35rem;
`;
