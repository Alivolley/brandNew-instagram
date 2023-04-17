import React from "react";
import styled from "styled-components";
import SearchItem from "../SearchItem/SearchItem";
import CloseButtonIcon from "../../assets/svgs/CloseButtonIcon";
import SearchSkeleton from "../Skeletons/SearchSkeleton/SearchSkeleton";

const HeaderSearchResult = ({ templateTheme, searchValue, allSearchedUser, loading, closeHandler }) => {
   return (
      <Wrapper templateTheme={templateTheme}>
         <BodyTitle templateTheme={templateTheme}>
            Results
            <Icon onClick={closeHandler}>
               <CloseButtonIcon />
            </Icon>
         </BodyTitle>

         <ResultBody>
            {allSearchedUser?.map((user) => (
               <SearchItem key={user?.username} detail={user} onClose={closeHandler} templateTheme={templateTheme} />
            ))}

            {loading && <SearchSkeleton />}
            {!loading && allSearchedUser.length === 0 && searchValue && <NoResult>No such user found</NoResult>}
            {!loading && !searchValue && <NoResult>Type a username</NoResult>}
         </ResultBody>
      </Wrapper>
   );
};

export default HeaderSearchResult;

const Wrapper = styled.div`
   position: absolute;
   top: 100%;
   left: 0;
   right: 0;
   background-color: ${({ templateTheme }) => templateTheme};
   border: 0.1rem solid var(--border-color);
   padding: 1rem;
   padding-top: 0;
   max-height: 21rem;
   overflow: auto;
   border-radius: 0.3rem;
   * {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }
`;

const BodyTitle = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 1.5rem;
   border-bottom: 0.1rem solid var(--border-color);
   padding: 1rem 0;
   margin-bottom: 1rem;
   position: sticky;
   top: 0;
   right: 0;
   left: 0;
   background-color: ${({ templateTheme }) => templateTheme};
`;

const Icon = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
`;

const ResultBody = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

const NoResult = styled.p`
   text-align: center;
   font-size: 1.4rem;
   color: gray;
`;
