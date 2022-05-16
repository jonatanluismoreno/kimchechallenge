import React, { useState, useRef } from "react";

import styled from "styled-components";
import Form from "../Form";

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <Form />
    </StyledHeader>
  );
};

export default Header;
