import React from "react";
import styled from "styled-components";

import MenuList from "./MenuList";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Profile = styled.div`
  margin: 2rem 0;
`;

const LeftSideBar = () => {
  return (
    <Container>
      <Content>
        <MenuList />
      </Content>
      <Profile>content</Profile>
    </Container>
  );
};

export default LeftSideBar;
