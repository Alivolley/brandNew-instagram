import { Drawer } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import NotificationItem from "../NotificationItem/NotificationItem";
import CloseButtonIcon from "../../assets/svgs/CloseButtonIcon";
import useActivities from "../../api/activities/useActivities";

const NotificationDrawer = ({ show, colseHandler, templateTheme }) => {
   const [getActivitiesRequest, getMoreActivities, loading, allActivities, nextUrl] = useActivities();

   useEffect(() => {
      show && getActivitiesRequest();
   }, [show]);

   console.log(allActivities);

   return (
      <DrawerWrapper anchor="left" open={show} onClose={colseHandler} templatetheme={templateTheme}>
         <Container templatetheme={templateTheme}>
            <Header>
               <Title>Notifications</Title>
               <Icon onClick={colseHandler}>
                  <CloseButtonIcon />
               </Icon>
            </Header>

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

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   border-bottom: 0.1rem solid var(--border-color);
   padding-bottom: 2rem;
`;

const Title = styled.h3`
   font-size: 2.5rem;
`;

const Icon = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;

   svg {
      color: gray;
   }
`;

const NotifBody = styled.div`
   margin-top: 3rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
`;
