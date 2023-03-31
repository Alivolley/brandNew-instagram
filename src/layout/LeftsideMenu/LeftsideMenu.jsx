import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftsideMenu = () => {
   return (
      <Leftside>
         <Links>
            <Item>
               <Icon></Icon>
               <Text>Home</Text>
            </Item>
            <Item>
               <Icon></Icon>
               <Text>Search</Text>
            </Item>
            <Item>
               <Icon></Icon>
               <Text>Explore</Text>
            </Item>
            <Item>
               <Icon></Icon>
               <Text>Messages</Text>
            </Item>
            <Item>
               <Icon></Icon>
               <Text>Notifications</Text>
            </Item>
            <Item>
               <Icon></Icon>
               <Text>Create</Text>
            </Item>
            <Item>
               <Icon></Icon>
               <Text>Profile</Text>
            </Item>
         </Links>
      </Leftside>
   );
};

export default LeftsideMenu;

const Leftside = styled.div``;

const Links = styled.div``;

const Item = styled(Link)``;

const Text = styled.p``;

const Icon = styled.div``;
