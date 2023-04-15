import React from "react";
import testPhoto from "./../../assets/Images/NoProfilePhoto.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CommentItem = () => {
   return (
      <Wrapper>
         <Header>
            <HeaderImage src={testPhoto} />
            <HeaderUsername to={`/`}>ali-azghandi</HeaderUsername>
            <HeaderIcon>
               <DeleteForeverIcon />
            </HeaderIcon>
         </Header>
         <Text>Lorem ipsum dolor sit amet consectetur</Text>
      </Wrapper>
   );
};

export default CommentItem;

const Wrapper = styled.div`
   /* display: flex;
   fe
   align-items: center;
   gap: 1rem; */
`;

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
