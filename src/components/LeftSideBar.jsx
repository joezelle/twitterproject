import React from "react";
import styled from "styled-components";

import MenuList from "./MenuList";

const Container = styled.div`
  position: relative;
`;

const Content = styled.div`
  width: 26rem;
  display: flex;
  flex-direction: column;
`;

const Content2 = styled.div`
  position: fixed;
  overflow-y: auto;
  height: 100%;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        <Content2>
          <MenuList />
          <Profile>content</Profile>
        </Content2>
      </Content>
    </Container>
  );
};

export default LeftSideBar;
