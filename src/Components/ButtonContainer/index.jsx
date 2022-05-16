import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  gap: 10px;
`;

const ButtonContainer = ({ handleButton }) => {
  return (
    <StyledButtonContainer>
      <Button handleButton={handleButton} />
      <Button handleButton={handleButton} />
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
