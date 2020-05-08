import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Trend = styled.div`
  cursor: pointer;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgb(56, 68, 77);
`;

const Title = styled.div`
  padding-top: 0.2rem;
  font-weight: bold;
  font-size: 15px;
  color: #fff;
`;
const Number = styled.div`
  padding-top: 0.2rem;
  font-weight: bold;
  font-size: 15px;
  color: rgb(136, 153, 166);
`;

const trend = {
  display: "flex",
  flexDirection: "row",
  color: "rgb(136,153,166)",
  fontWeight: "400",
  fontSize: "1.3rem",
};

const MainTrends = (props) => {
  return (
    <Trend>
      <div style={trend}>
        <span>{props.trending}</span>
        <span>v</span>
      </div>
      <Title>{props.title}</Title>
      <Number>{props.number}</Number>
    </Trend>
  );
};

export default MainTrends;
