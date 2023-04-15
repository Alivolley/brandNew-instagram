import React from "react";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CommentItem = ({ detail }) => {
   return (
      <Wrapper>
         <Header>
            <HeaderImage src={detail?.user?.profile_photo ? `https://djangoinsta.pythonanywhere.com${detail?.user?.profile_photo}` : noProfile} />
            <HeaderUsername to={`/profile/${detail?.user?.username}/posts`}>{detail?.user?.username}</HeaderUsername>
            {detail?.can_delete && (
               <HeaderIcon onClick={() => console.log(detail.id)}>
                  <DeleteForeverIcon />
               </HeaderIcon>
            )}
         </Header>
         <Text>{detail?.body}</Text>
      </Wrapper>
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
