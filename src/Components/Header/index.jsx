import React from "react";

import styled from "styled-components";
import Form from "../Form";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4em 0;
  background-image: url(https://hdwallpaperim.com/wp-content/uploads/2017/09/16/49901-map-world.jpg);
  background-size: 95vw;
`;

const StyledTitle = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #5b453d;
`;

const Header = ({ setInputContent, inputContent }) => {
  return (
    <StyledHeader>
      <StyledTitle>Country Finder</StyledTitle>
      <Form setInputContent={setInputContent} inputContent={inputContent} />
    </StyledHeader>
  );
};

export default Header;
