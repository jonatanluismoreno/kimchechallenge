import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  color: #ffffff;
  background: #91735f;
  border-radius: 8px;
  width: 12em;
  height: 3.5em;
  border: 0;
  cursor: pointer;
  font-size: 20px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const Button = ({ handleButton, children }) => {
  return <StyledButton onClick={handleButton}>{children} </StyledButton>;
};

export default Button;
