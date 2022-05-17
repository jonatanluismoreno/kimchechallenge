import React from "react";
import styled, { keyframes } from "styled-components";

const bounceInUp = keyframes`from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    from {
      opacity: 0;
      transform: translate3d(0, 3000px, 0) scaleY(5);
    }
    60% {
      opacity: 1;
      transform: translate3d(0, -20px, 0) scaleY(0.9);
    }

    75% {
      transform: translate3d(0, 10px, 0) scaleY(0.95);
    }

    90% {
      transform: translate3d(0, -5px, 0) scaleY(0.985);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
    `;

const StyledCardContainer = styled.div`
  animation-name: ${bounceInUp};
  animation-duration: 1.5s;
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
