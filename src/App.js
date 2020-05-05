import React from "react";
import styled from "styled-components";

import Main from "./components/Main";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  border: 0 solid black;
  align-items: stretch;
  // position: relative;
`;

function App() {
  return (
    <Container>
      <LeftSideBar></LeftSideBar>
      <Main></Main>
      <RightSideBar></RightSideBar>
    </Container>
  );
}

export default App;
