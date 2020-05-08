import React from "react";
import styled from "styled-components";

import Follow from "./Follow";

const Container = styled.div`
  background-color : rgb(25, 39, 52);
  margin-bottom: 15px;
  border: 1px solid rgb(25,39,52);
  overflow-x: hidden:
  overflow-y: hidden;
  position: sticky;
  width: 100%;
  border-radius : 1.4rem;
`;
const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(56, 68, 77);
  padding: 1rem 1.5rem;
`;

const head = {
  marginRight: "0.5rem",
  fontWeight: "800",
  fontSize: "1.9rem",
  color: "rgb(255,255,255)",
};
const bottom = {
  padding: "1rem 1.5rem",
  fontWeight: "400",
  fontSize: "1.5rem",
  color: "rgba(29,161,242,1.00)",
};

const Trends = () => {
  return (
    <Container>
      <Heading>
        <span style={head}>Who to follow</span>
      </Heading>
      <Follow name=" Huawei" handle="@huawei" />
      <Follow name=" Huawei" handle="@huawei" />
      <Follow name=" Huawei" handle="@huawei" />

      <div style={bottom}>Show more</div>
    </Container>
  );
};

export default Trends;
