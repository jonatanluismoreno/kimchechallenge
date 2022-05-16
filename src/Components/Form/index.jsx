import React from "react";
import Input from "../Input";
import styled from "styled-components";
import searchicon from "./../../assets/search.svg";

const StyledForm = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 32px;
  width: 319px;
  margin-top: 32px;
  background-color: aliceblue;
`;

const StyledInputContainer = styled.div`
  display: flex;
  height: 32px;
  box-sizing: border-box;
  align-items: center;
  margin: 8px 8px 8px 24px;
`;

const StyledImage = styled.img`
  display: inline-block;
  z-index: 1;
  left: 20vw;
  transform: translate(-7px);
  opacity: 0.5;
`;

const Form = ({ setInputContent }) => {
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value) {
      setInputContent(event.target.value);
      console.log(event.target.value);
    }
  };
  return (
    <StyledForm>
      <StyledInputContainer>
        <StyledImage src={searchicon} alt="search icon" />
        <Input placeholder="Search for a country" handleChange={handleChange} />
      </StyledInputContainer>
    </StyledForm>
  );
};

export default Form;
