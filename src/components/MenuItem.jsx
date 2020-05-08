import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0.2rem 0 0.5rem;
  width: 100%;
  font-size: 1.9rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Content = styled.div`
  cursor: pointer;
  width: 100%;
`;

const Item = styled.div`
  flex-direction : row
  justify-content: center;
  padding: 1rem;
`;

const Icon = styled.span`
  height: 1.75rem;
  color: #fff;
  vertical-align: text-bottom
  position: relative;
  display: inline-block;
`;
const Word = styled.span`
  margin: 0 1.5rem 2.0rem;
  font-size: 1.9rem;
  font-weight:bold;
  line-height: 1.3125
  max-width: 100%;
   
`;
const MenuItem = (props) => {
  return (
    <Container>
      <Content>
        <Item>
          <Icon>{props.Icon}</Icon>
          <Word>{props.Word}</Word>
        </Item>
      </Content>
    </Container>
  );
};

export default MenuItem;
