import React from "react";
import styled from "styled-components";
import ButtonContainer from "../ButtonContainer";

const StyledMain = styled.main``;

const Main = ({ error, loading, toggleSearchBy }) => {
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  return (
    <StyledMain>
      <ButtonContainer handleButton={toggleSearchBy} />
    </StyledMain>
  );
};

export default Main;
