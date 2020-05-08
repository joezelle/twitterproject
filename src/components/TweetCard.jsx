import React from "react";
import styled from "styled-components";
import Notification from "./Notification";

const Container = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(56, 68, 77);
  flex-direction: column;
`;

const Content = styled.div`
  background-color: rgb(21, 32, 43);
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem;
`;

const Tweet = styled.div`
line-height: 1.3125
padding-bottom: 10px;
margin: 0.5rem 0.5rem;
color: inherit;
    font: inherit;
    white-space: inherit;
`;

const Name = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0.5rem 1.5rem;
  padding-bottom: 1rem;
`;
const handle = {
  fontSize: "1.5rem",
  color: "#586744",
  marginLeft: "0.5rem",
};

const ImageCard = styled.div`
  margin-top: 1rem;
  backgroundcolor: rgba(255, 255, 255, 0.03);
  border-radius: 1.4rem;
  border: 1px solid rgb(56, 68, 77);
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;
const Imageonly = styled.div`
  margin-top: 1rem;
  backgroundcolor: rgba(255, 255, 255, 0.03);
  border-radius: 1.4rem;
  border: 1px solid rgb(56, 68, 77);
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  display: block;
`;

const Desc = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  line-height: 1.5rem;
`;
const picture = {
  flexBasis: "4.9rem",
  paddingTop: "0.5rem",
  margin: "0 0.5rem",
  borderRadius: "99rem",
  border: "1px solid rgba(0,0,0,0.04)",
  height: "4.5rem",
  backgroundColor: "#fef",
};
const width = {
  width: "100%",
};

const Retweet = styled.div`
  margin: 0 rem 0.2rem;
  font-size: 1.1rem;
  color: #586744;
  display: flex;
  flex-direction: row;
  padding: 1rem 1rem 0.5rem;
`;

const icon = {
  flexBasis: "4.9rem",
  margin: "0 0.5rem",
  textAlign: "right",
};
// const imag = {
//   width: "4.9rem",
//   height: "4.9rem",
// };

const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  max-width: 42.5rem;
  flex-direction: row;
`;

const TweetCard = (props) => {
  return (
    <Container>
      <Retweet>
        {" "}
        <span style={icon}>{props.icon}</span> {props.retweet}
      </Retweet>
      <Content>
        <p style={picture}>{props.picture}</p>
        <div style={width}>
          <Name>
            <span>{props.name}</span>
            <span style={handle}>{props.handle}</span>
          </Name>
          <Tweet>{props.tweet}</Tweet>
          <ImageCard>
            <Image src={props.image} />
            <Desc>
              <span>{props.title}</span>
              <span>{props.details}</span>
              <span>{props.link}</span>
            </Desc>
          </ImageCard>

          <Wrapper>
            <Notification icon="B" number="4.5k" />
            <Notification icon="B" number="4.5k" />
            <Notification icon="B" number="4.5k" />
            <Notification icon="B" number="4.5k" />
          </Wrapper>
        </div>
      </Content>
    </Container>
  );
};

export default TweetCard;
