import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9)), #1747f5;
  border-radius: 8px;
  width: 10em;
  height: 3em;
  border: 0;
  cursor: pointer;
  font-size: 17px;
`;

const Button = ({ handleButton }) => {
  return;
  <StyledButton onClick={handleButton} />;
};

export default Button;
