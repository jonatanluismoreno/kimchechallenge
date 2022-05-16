import React from "react";
import styled from "styled-components";
import ButtonContainer from "../ButtonContainer";
import CardsContainer from "../CardsContainer";

const StyledMain = styled.main``;

const Main = ({ error, loading, toggleSearchBy, content }) => {
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  return (
    <StyledMain>
      <ButtonContainer handleButton={toggleSearchBy} />
      <CardsContainer content={content} />
    </StyledMain>
  );
};

export default Main;
