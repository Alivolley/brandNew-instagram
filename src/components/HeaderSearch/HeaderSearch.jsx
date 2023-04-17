import React, { useState } from "react";
import styled from "styled-components";
import HeaderSearchIcon from "./../../assets/svgs/HeaderSearchIcon";
import HeaderSearchResult from "../HeaderSearchResult/HeaderSearchResult";
import useSearch from "../../api/search/useSearch";

const HeaderSearch = ({ templateTheme }) => {
   const [searchValue, setSearchValue] = useState("");
   const [showResult, setShowResult] = useState(false);
   const [searchRequest, loading, allSearchedUser] = useSearch();

   const onChangeHandler = (e) => {
      setSearchValue(e.target.value);
      if (e.target.value) {
         searchRequest(e.target.value);
      }
   };

   return (
      <Wrapper templateTheme={templateTheme}>
         <Icon>
            <HeaderSearchIcon />
         </Icon>
         <Input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={onChangeHandler}
            onFocus={() => setShowResult(true)}
            onBlur={() => !searchValue && setShowResult(false)}
         />
         {showResult && (
            <HeaderSearchResult
               templateTheme={templateTheme}
               searchValue={searchValue}
               allSearchedUser={allSearchedUser}
               loading={loading}
               closeHandler={() => setShowResult(false)}
            />
         )}
      </Wrapper>
   );
};

export default HeaderSearch;

const Wrapper = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   gap: 1rem;
   background-color: rgb(239, 239, 239);
   padding: 0.7rem 1.5rem;
   border-radius: 0.7rem;
   background-color: ${({ templateTheme }) => (templateTheme === "white" ? " rgb(239, 239, 239)" : " rgb(38, 38, 38)")};

   @media (max-width: 330px) {
      width: 17rem;
   }

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
