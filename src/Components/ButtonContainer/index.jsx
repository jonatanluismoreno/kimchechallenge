import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 55px 0;
  gap: 10px;
`;

const ButtonContainer = ({ setShowByContinent }) => {
  return (
    <StyledButtonContainer>
      <Button handleButton={() => setShowByContinent(true)}>Continent</Button>
      <Button handleButton={() => setShowByContinent(false)}>Language</Button>
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
