import React from "react";
import styled from "styled-components";
import noProfile from "./../../assets/Images/NoProfilePhoto.jpg";
import dsafd from "./../../assets/Images/ali.png";

const RecivedMessage = ({ templateTheme }) => {
   return (
      <Wrapper>
         <Image src={dsafd} />
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

const Image = styled.img`
   width: 2.5rem;
   height: 2.5rem;
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
   border-color: ${({ templateTheme }) => (templateTheme === "white" ? "rgba(0, 0, 0, 0.12)" : "rgba(256,256,256,0.2)")};
   padding: 1.2rem 2rem;
   border-radius: 3rem;
   font-size: 1.35rem;
`;
