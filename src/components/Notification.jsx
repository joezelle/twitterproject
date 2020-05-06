import React from "react";
import styled from "styled-components";

const Container = styled.div`
margin-top: 1rem;
display: flex
justify-content: center;
max-width: 42.5rem;
flex-direction: row
`;

const Notifications = styled.div`
  justify-content: flex-start;
  flex-basis: 0px;
  flex-grow: 1;
  color: rgb(136, 153, 166);
`;

const icon = {
  margin: "0 0.5rem 0 0",
};

const Notification = (props) => {
  return (
    <Container>
      <Notifications>
        <span style={icon}>
          {props.icon} {props.number}
        </span>
      </Notifications>
    </Container>
  );
};

export default Notification;
