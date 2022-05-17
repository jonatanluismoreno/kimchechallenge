import React from "react";

import styled from "styled-components";
import Form from "../Form";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #2196f3;
`;

const Header = ({ setInputContent }) => {
  return (
    <StyledHeader>
      <Form setInputContent={setInputContent} />
    </StyledHeader>
  );
};

export default Header;
