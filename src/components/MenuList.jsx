import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";

const Container = styled.div`
  align-items: flex-start;
  position: relative;
`;
const Logo = styled.h1`
  max-width: 100%;
  padding: 0.2rem 0;
  align-self: stretch;
  cursor: pointer;
`;
const MenuList = () => {
  return (
    <Container>
      <Logo>Twitter</Logo>
      <MenuItem Icon="BB" Word="Explore" />
      <MenuItem Icon="BB" Word="Notifications" />
      <MenuItem Icon="BB" Word="Messages" />
      <MenuItem Icon="BB" Word="Bookmarks" />
      <MenuItem Icon="BB" Word="Lists" />
      <MenuItem Icon="BB" Word="Profile" />
      <MenuItem Icon="BB" Word="More" />
    </Container>
  );
};

export default MenuList;
