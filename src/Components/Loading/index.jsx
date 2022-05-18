import React from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  padding: 15vw;
`;

const StyledLoadingDiv = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #91735f transparent transparent transparent;
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <StyledLoading>
      <StyledLoadingDiv />
      <StyledLoadingDiv />
      <StyledLoadingDiv />
      <StyledLoadingDiv />
    </StyledLoading>
  );
};

export default Loading;
