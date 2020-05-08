import React from "react";
import styled from "styled-components";

import Trends from "./Trends";
import Whotofollow from "./WhoToFollow";

const Container = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0 5.9px;
  position: sticky;
  top: -300px;
  width: 100%;
`;

const search = {
  backgroundColor: "rgb(37, 51, 65)",
  color: "#fef",
  width: "80%",
  border: "none",
  height: "3.5rem",
  border: "none",
  margin: "0 0.5rem",
  padding: "0.3rem",
};

const Search = styled.div`
  width: 100%;
  text-align: center;
  min-height: 3rem;
  padding: 0.3rem 0.5rem;
  height: 4rem;
  z-index: 3;
  margin-bottom: 1rem;
  align-items: center;
  top: 0.4rem;
  position: sticky;
  background-color: rgb(37, 51, 65);
  border-radius: 99rem;
`;

const Footer = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-right: 15px;
  flex-wrap: wrap;
`;
const FooterItem = styled.p`
  color: rgb(136, 153, 166);
  font-weight: 400;
  margin-bottom: 2px;
  margin-top: 2px;
  padding-right: 10px;
  font-size: 1.1rem;
  overflow-wrap: break-word;
`;
const RightSideBar = () => {
  return (
    <Container>
      <Search>
        <span>BB</span>
        <input style={search} placeholder="Search Twitter" />
      </Search>
      <Trends />
      <Whotofollow />
      <Footer>
        <FooterItem>Terms</FooterItem>
        <FooterItem>Privacy Policy</FooterItem>
        <FooterItem>Cookies</FooterItem>
        <FooterItem>Ads info</FooterItem>
        <FooterItem>More</FooterItem>
        <FooterItem>2020 Twitter, Inc</FooterItem>
      </Footer>
    </Container>
  );
};

export default RightSideBar;
