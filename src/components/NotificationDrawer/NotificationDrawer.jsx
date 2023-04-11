import { Drawer } from "@mui/material";
import React from "react";
import styled from "styled-components";
import NotificationItem from "../NotificationItem/NotificationItem";

const NotificationDrawer = ({ show, colseHandler, templateTheme }) => {
   return (
      <DrawerWrapper anchor="left" open={show} onClose={colseHandler}>
         <Container templateTheme={templateTheme}>
            <Title>Notifications</Title>

            <NotifBody>
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               {/* <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} />
               <NotificationItem templateTheme={templateTheme} /> */}
            </NotifBody>
         </Container>
      </DrawerWrapper>
   );
};

export default NotificationDrawer;

const DrawerWrapper = styled(Drawer)`
   & > .MuiBackdrop-root {
      background-color: transparent;
   }
`;

const Container = styled.div`
   /* min-height: 100vh; */
   /* height: 100%; */
   width: 30rem;
   background-color: ${({ templateTheme }) => templateTheme};
   border-right: 0.1rem solid var(--border-color);
   padding: 2.5rem;

   h3 {
      color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};
   }
`;

const Title = styled.h3`
   font-size: 2.5rem;
   border-bottom: 0.1rem solid var(--border-color);
   padding-bottom: 2rem;
`;

const NotifBody = styled.div`
   margin-top: 3rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;
