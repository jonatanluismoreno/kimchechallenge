import React from "react";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCard = styled.li`
  font-family: "Titillium Web", sans-serif;
  width: 11em;
  height: 3.5em;
  list-style-type: none;
  background: #959f95;
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.8;
  :hover {
    opacity: 1;
  }
`;

const StyledCountry = styled.h3`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
`;

const StyledCapital = styled.h3`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
`;

const Card = ({ name, emoji, capital }) => {
  console.log(emoji);
  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledCountry>
          {name}
          {"  "}
          {emoji}
        </StyledCountry>
        <StyledCapital>{capital}</StyledCapital>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default Card;
