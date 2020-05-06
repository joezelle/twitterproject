import React from "react";
import styled from "styled-components";

import MenuItem from "./MenuItem";

// const Container = styled.div`
//   // align-items: flex-start;
//   // position: relative;
// `;
const Logo = styled.h1`
  max-width: 100%;
  padding: 0.2rem 0;
  align-self: stretch;
  cursor: pointer;
`;

const Button = styled.div`
  margin: 0.5rem 0;
  width: 90%;
  height: 49px;
  background-color: rgb(29, 161, 242);
  cursor: pointer;
  padding: 0 3rem 0;
  border-radius: 99rem;
  text-decoration: none;
  list-style: none;
  line-hieght: 1;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.8rem 2.8rem;
`;

const Link = styled.a``;
const MenuList = () => {
  return (
    <>
      <Logo>Twitter</Logo>
      <MenuItem Icon="BB" Word="Explore" />
      <MenuItem Icon="BB" Word="Notifications" />
      <MenuItem Icon="BB" Word="Messages" />
      <MenuItem Icon="BB" Word="Bookmarks" />
      <MenuItem Icon="BB" Word="Lists" />
      <MenuItem Icon="BB" Word="Profile" />
      <MenuItem Icon="BB" Word="More" />
      <Button>Tweet</Button>
    </>
  );
};

export default MenuList;
