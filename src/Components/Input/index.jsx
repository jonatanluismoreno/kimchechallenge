import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: transparent;
  flex: 1 1 auto;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.087px;
  cursor: auto;
  border: none;
  opacity: 0.5;
`;

const Input = ({ inputRef, placeholder, handleChange }) => {
  return (
    <StyledInput
      ref={inputRef}
      className="input"
      type="text"
      placeholder="Search for a country"
      onChange={handleChange}
    />
  );
};

export default Input;
