import { Drawer } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import HeaderSearchIcon from "../../assets/svgs/HeaderSearchIcon";
import SearchItem from "../SearchItem/SearchItem";

const SearchDrawer = ({ show, colseHandler, templateTheme }) => {
   const [searchValue, setSearchValue] = useState("");

   return (
      <DrawerWrapper anchor="left" open={show} onClose={colseHandler} templatetheme={templateTheme}>
         <Container templatetheme={templateTheme}>
            <Title>Search</Title>

            <Wrapper templateTheme={templateTheme}>
               <Icon>
                  <HeaderSearchIcon />
               </Icon>
               <Input type="text" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </Wrapper>

            <SearchBody>
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
               <SearchItem templateTheme={templateTheme} />
            </SearchBody>
         </Container>
      </DrawerWrapper>
   );
};

export default SearchDrawer;

const DrawerWrapper = styled(Drawer)`
   & > .MuiBackdrop-root {
      background-color: transparent;
   }

   .MuiPaper-root,
   .MuiPaper-elevation,
   .MuiPaper-elevation16,
   .MuiDrawer-paper,
   .MuiDrawer-paperAnchorLeft,
   .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
      background-color: ${({ templatetheme }) => templatetheme};
      border-right: 0.1rem solid var(--border-color);
      color: ${({ templatetheme }) => (templatetheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }
`;

const Container = styled.div`
   width: 30rem;
   padding: 2.5rem;
`;

const Title = styled.h3`
   font-size: 2.5rem;
   border-bottom: 0.1rem solid var(--border-color);
   padding-bottom: 2rem;
`;

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   margin-top: 3rem;
   gap: 1rem;
   background-color: rgb(239, 239, 239);
   padding: 1.5rem;
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
   font-size: 1.5rem;
`;

const SearchBody = styled.div`
   margin-top: 6rem;
   padding-top: 3rem;
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   /* border-top: 0.1rem solid var(--border-color); */
`;
