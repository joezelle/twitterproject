import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

import Main from "./components/Main";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

// const Container1 = styled.div`
//   max-width: 120rem;
//   margin: 0 auto;
//   display: flex;
//   border: 0 solid black;
//   align-items: stretch;
//   // position: relative;
// `;

const Wrapper = styled.div`
  width: 99rem;
  flex-shrink: 1;
  display: flex;
  flex-gr0w: 1;
`;

function App() {
  return (
    <Container>
      <Row>
        <Col xs="3">
          <LeftSideBar></LeftSideBar>
        </Col>
        <Col xs="9">
          <Row>
            <Col xs="9">
              <Main></Main>
            </Col>
            <Col xs="3">
              <RightSideBar></RightSideBar>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
