import React from "react";
import styled from "styled-components";
import Category from "../Category";

const StyledCardsContainer = styled.div``;

const CardsContainer = ({ content }) => {
  return (
    <StyledCardsContainer>
      {content &&
        content
          .filter(({ countries }) => countries.length)
          .map((c) => (
            <Category
              name={c.name}
              countries={c.countries}
              id={c.name}
              key={c.name}
            />
          ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
