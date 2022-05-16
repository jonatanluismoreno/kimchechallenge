import React, { useState, useRef } from "react";

import styled from "styled-components";
import Form from "../Form";

const StyledHeader = styled.header``;

const Header = ({ setInputContent }) => {
  return (
    <StyledHeader>
      <Form setInputContent={setInputContent} />
    </StyledHeader>
  );
};

export default Header;
