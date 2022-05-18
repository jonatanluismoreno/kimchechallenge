import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  font-family: "Titillium Web", sans-serif;
  background-color: transparent;
  flex: 1 1 auto;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.087px;
  cursor: auto;
  border: none;
  opacity: 0.8;
  :focus-visible {
    outline: none;
  }
`;

const Input = ({ placeholder, handleChange, inputContent }) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      value={inputContent}
    />
  );
};

export default Input;
