import React, { useState } from "react";
import styled from "styled-components";
import HeaderSearchIcon from "./../../assets/svgs/HeaderSearchIcon";

const HeaderSearch = ({ templateTheme }) => {
   const [searchValue, setSearchValue] = useState("");

   return (
      <Wrapper templateTheme={templateTheme}>
         <Icon>
            <HeaderSearchIcon />
         </Icon>
         <Input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </Wrapper>
   );
};

export default HeaderSearch;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   background-color: rgb(239, 239, 239);
   padding: 0.7rem 1.5rem;
   border-radius: 0.7rem;
   background-color: ${({ templateTheme }) => (templateTheme === "white" ? " rgb(239, 239, 239)" : " rgb(38, 38, 38)")};

   input {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "black" : "white")};
   }
`;

const Icon = styled.button`
   border: none;
   background-color: transparent;
`;

const Input = styled.input`
   border: none;
   outline: none;
   background-color: transparent;
   font-size: 1.4rem;
`;
