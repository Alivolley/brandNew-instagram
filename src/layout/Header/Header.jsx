import React from "react";
import styled from "styled-components";

const Header = () => {
   return (
      <Wrapper>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam dicta culpa expedita deleniti dolorum repudiandae similique neque, facere deserunt? Molestiae
         est voluptate quo obcaecati, provident repellendus sunt nesciunt officia omnis.
      </Wrapper>
   );
};

export default Header;

const Wrapper = styled.div`
   position: fixed;
   top: 0;
   background-color: transparent;
`;
