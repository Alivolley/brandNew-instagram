import { Drawer } from "@mui/material";
import React, { useEffect } from "react";
import styled from "styled-components";
import NotificationItem from "../NotificationItem/NotificationItem";
import CloseButtonIcon from "../../assets/svgs/CloseButtonIcon";
import useActivities from "../../api/activities/useActivities";
import NotificationSkeleton from "../Skeletons/NotificationSkeleton/NotificationSkeleton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const NotificationDrawer = ({ show, colseHandler, templateTheme }) => {
   const [getActivitiesRequest, getMoreActivities, loading, allActivities, nextUrl] = useActivities();

   useEffect(() => {
      show && getActivitiesRequest();
   }, [show]);

   // console.log(allActivities);

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
               {allActivities?.map((notif, index) => (
                  <NotificationItem key={index} detail={notif} onClose={colseHandler} templateTheme={templateTheme} />
               ))}

               {!loading && !allActivities?.length && <NoPosts>No recent activity</NoPosts>}
               {loading && <NotificationSkeleton />}

               {!loading && nextUrl && (
                  <AddButton onClick={getMoreActivities} templateTheme={templateTheme}>
                     <ControlPointIcon color="inherit" fontSize="inherit" />
                  </AddButton>
               )}
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

const NoPosts = styled.p`
   text-align: center;
   font-weight: 700;
   opacity: 0.7;
`;

const AddButton = styled.button`
   display: block;
   margin: 0 auto;
   border: none;
   background-color: transparent;
   cursor: pointer;
   width: fit-content;
   margin: 0 auto;
   font-size: 4.5rem;
   color: ${({ templateTheme }) => (templateTheme === "white" ? "rgb(38, 38, 38)" : "rgb(239, 239, 239)")};

   @media (max-width: 400px) {
      font-size: 3rem;
   }
`;
