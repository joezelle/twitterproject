import React from "react";
import styled from "styled-components";
import Tweets from "./TweetCard";

const Container = styled.div`
  // max-width: 60rem;
  // margin: 0;
  // min-width: 60rem;
  width: 100%;
  border: 1px solid rgb(56, 68, 77);
  position: sticky;
`;

const Home = styled.div`
  position: sticky;
  border-bottom: 1px solid rgb(56, 68, 77);
  z-index: 4;
  top: 0px;
  height: 5.3rem;
  padding: 0 1.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #15202b;
  justify-content: space-between;
`;

const style = {
  fontWeight: "800",
  fontSize: "1.9rem",
};

const TweetBox = styled.div`
  background-color: rgb(21, 32, 43);
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1.5rem;
  height: 11rem;
  border-bottom: 1rem solid rgb(37, 51, 65);
`;

const picture = {
  flexBasis: "4.9rem",
  paddingTop: "0.5rem",
  margin: "0 0.5rem",
  borderRadius: "99rem",
  border: "1px solid rgba(0,0,0,0.04)",
  height: "4.9rem",
  backgroundColor: "#fef",
};
const width = {
  width: "100%",
};
const box = {
  backgroundColor: "rgb(21, 32, 43)",
  color: "#fef",
  width: "100%",
  border: "none",
  height: "4.9rem",
  margin: "0 0.5rem",
};
const icons = {
  backgroundColor: "rgb(21, 32, 43)",
  width: "100%",
  margin: "0.5rem 0",
  display: "flex",
  alignItem: "flex-end",
  justifyContent: "space-between",
};

const icon = {
  display: "flex",
  alignSelf: "flex-end",
  width: "30%",
  justifyContent: "space-between",
};

const Button = styled.div`
  background-color: rgb(29, 161, 242);
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 99rem;
  font-weight: bold;
  font-size: 1.3rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0rem 0.8rem 2.8rem;
`;
const Main = () => {
  return (
    <Container>
      <Home>
        <p style={style}>Home</p>
        <p>Star</p>
      </Home>
      <TweetBox>
        <p style={picture}></p>
        <div style={width}>
          <input style={box} placeholder="What's Happening?" />
          <div style={icons}>
            <div style={icon}>
              <span>BB</span>
              <span>BB</span>
              <span>BB</span>
              <span>BB</span>
            </div>
            <Button>Tweet</Button>
          </div>
        </div>
      </TweetBox>
      <Tweets
        retweet="emmax retweeted"
        icon="b"
        name="Senator Dino Melaye"
        handle="@dino_melaye 19h"
        tweet="EVERYONE WHO HELD AND IS HOLDING ANY POLITICAL OFFICE IN NIGERIA
      WHETHER ELECTIVE OR APPOINTED INCLUDING ME HAVE FAIL.WE SOLD CRUDE
      OIL FOR 64 YEARS BUT WE COULDN'T FEED OUR CITIZENS FOR JUST 2
      WEEKS OF LOCKDOWN!! WELL, THE GOD OF THE POOR WILL JUDGE US ALL.
      ITS TIME TO REBOOT..."
        link="google.com"
      />
      <Tweets
        retweet="emmax retweeted"
        icon="b"
        name="Senator Dino Melaye"
        handle="@dino_melaye 19h"
        tweet="EVERYONE WHO HELD AND IS HOLDING ANY POLITICAL OFFICE IN NIGERIA
      WHETHER ELECTIVE OR APPOINTED INCLUDING ME HAVE FAIL.WE SOLD CRUDE
      OIL FOR 64 YEARS BUT WE COULDN'T FEED OUR CITIZENS FOR JUST 2
      WEEKS OF LOCKDOWN!! WELL, THE GOD OF THE POOR WILL JUDGE US ALL.
      ITS TIME TO REBOOT..."
        title="Stupid man"
        details="jdjdflskfjsdklsjlfjsklfjslkjfsdkljfsdf"
        link="google.com"
        Image="src='../assets/images/black-and-white-boat-darkness-748626.jpg'"
      />
      <Tweets
        retweet="emmax liked"
        icon="b"
        name="Senator Dino Melaye"
        handle="@dino_melaye 19h"
        tweet="EVERYONE WHO HELD AND IS HOLDING ANY POLITICAL OFFICE IN NIGERIA
      WHETHER ELECTIVE OR APPOINTED INCLUDING ME HAVE FAIL.WE SOLD CRUDE
      OIL FOR 64 YEARS BUT WE COULDN'T FEED OUR CITIZENS FOR JUST 2
      WEEKS OF LOCKDOWN!! WELL, THE GOD OF THE POOR WILL JUDGE US ALL.
      ITS TIME TO REBOOT..."
        title="Stupid man"
        details="jdjdflskfjsdklsjlfjsklfjslkjfsdkljfsdf"
        link="google.com"
        Image="src='../assets/images/black-and-white-boat-darkness-748626.jpg'"
      />
      <Tweets
        retweet="emmax retweeted"
        icon="b"
        name="Senator Dino Melaye"
        handle="@dino_melaye 19h"
        tweet="EVERYONE WHO HELD AND IS HOLDING ANY POLITICAL OFFICE IN NIGERIA
      WHETHER ELECTIVE OR APPOINTED INCLUDING ME HAVE FAIL.WE SOLD CRUDE
      OIL FOR 64 YEARS BUT WE COULDN'T FEED OUR CITIZENS FOR JUST 2
      WEEKS OF LOCKDOWN!! WELL, THE GOD OF THE POOR WILL JUDGE US ALL.
      ITS TIME TO REBOOT..."
        title="Stupid man"
        details="jdjdflskfjsdklsjlfjsklfjslkjfsdkljfsdf"
        link="google.com"
        Image="src='../assets/images/black-and-white-boat-darkness-748626.jpg'"
      />
      <Tweets
        retweet="emmax retweeted"
        icon="b"
        name="Senator Dino Melaye"
        handle="@dino_melaye 19h"
        tweet="EVERYONE WHO HELD AND IS HOLDING ANY POLITICAL OFFICE IN NIGERIA
      WHETHER ELECTIVE OR APPOINTED INCLUDING ME HAVE FAIL.WE SOLD CRUDE
      OIL FOR 64 YEARS BUT WE COULDN'T FEED OUR CITIZENS FOR JUST 2
      WEEKS OF LOCKDOWN!! WELL, THE GOD OF THE POOR WILL JUDGE US ALL.
      ITS TIME TO REBOOT..."
      />
    </Container>
  );
};

export default Main;
