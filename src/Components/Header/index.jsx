import React from "react";

import styled from "styled-components";
import Form from "../Form";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #e8ccbf;
`;

const StyledTitle = styled.h1`
  font-family: "Titillium Web", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #5b453d;
`;

const Header = ({ setInputContent }) => {
  return (
    <StyledHeader>
      <StyledTitle>Country Finder</StyledTitle>
      <Form setInputContent={setInputContent} />
    </StyledHeader>
  );
};

export default Header;
