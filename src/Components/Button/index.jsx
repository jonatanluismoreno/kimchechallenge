import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  color: #ffffff;
  background: #81968f;
  border-radius: 8px;
  width: 10em;
  height: 3em;
  border: 0;
  cursor: pointer;
  font-size: 17px;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const Button = ({ handleButton, children }) => {
  return <StyledButton onClick={handleButton}>{children} </StyledButton>;
};

export default Button;
