import React from "react";
import styled from "styled-components";

const StyledCardsContainer = styled.div``;

const CardsContainer = ({ content }) => {
  return (
    <StyledCardsContainer>
      {content &&
        content
          .filter(({ countries }) => countries.length)
          .map((c) => (
            <ul className="ul">
              {c.name}
              {c.countries.map((b) => (
                <li className="li">{b.name}</li>
              ))}
            </ul>
          ))}
    </StyledCardsContainer>
  );
};

export default CardsContainer;
