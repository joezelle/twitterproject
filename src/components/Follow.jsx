import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(56, 68, 77);
`;

const Follower = styled.div`
  cursor: pointer;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
`;

const Name = styled.div`
  padding-top: 0.2rem;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;

const Handle = styled.div`
  display: flex;
  flexdirection: row;
  color: rgb(136, 153, 166);
  fontweight: 400;
  fontsize: 1.2rem;
`;

const style = {
  display: "flex",
  flexDirection: "column",
};

const Button = styled.div`
  border: 0.2rem solid rgb(29, 161, 242);
  cursor: pointer;
  background-color: none;
  padding: 0.6rem 1rem;
  border-radius: 99rem;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.8rem 2.8rem;
`;

const picture = {
  flexBasis: "4.9rem",
  paddingTop: "0.5rem",
  margin: "1rem 0.5rem 0",
  borderRadius: "60%",
  border: "1px solid rgba(0,0,0,0.04)",
  height: "3.9rem",
  backgroundColor: "#fef",
};

const Follow = (props) => {
  return (
    <Container>
      <p style={picture}></p>
      <Follower>
        <div style={style}>
          <Name>{props.name}</Name>
          <Handle>{props.handle}</Handle>
        </div>
        <Button>Follow</Button>
      </Follower>
    </Container>
  );
};

export default Follow;
