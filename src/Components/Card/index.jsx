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

const StyledCardContainer = styled.li`
  animation-name: ${bounceInUp};
  animation-duration: 1s;
  display: flex;
  align-items: center;
`;

const StyledCard = styled.div`
  font-family: "Titillium Web", sans-serif;
  width: 13.5em;
  list-style-type: none;
  background: #c4c2a2;
  border-radius: 4px;
  color: #5b453d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0.8;
  border-radius: 25px 25px 25px 25px;
  :hover {
    opacity: 1;
  }
`;
const StyledCardTop = styled.div`
  width: 100%;
  background: linear-gradient(89.87deg, rgb(159, 126, 105), rgb(210, 187, 160));
  border-radius: 25px 25px 0px 0px;
  padding-top: 0.5em;
`;

const StyledCardBottom = styled.div`
  padding: 0.5em 0;
`;

const StyledCountry = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const StyledCapital = styled.h3`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
`;

const StyledFlag = styled.img`
  width: 100%;
  height: 7em;
`;

const Card = ({ name, emoji, capital, code }) => {
  return (
    <StyledCardContainer>
      <StyledCard>
        <StyledCardTop>
          <StyledCountry>
            {name}
            {"  "}
            {emoji}
          </StyledCountry>
          <StyledFlag
            alt=""
            src={`https://www.banderas-mundo.es/data/flags/w580/${code
              .toString()
              .toLowerCase()}.webp`}
          />
        </StyledCardTop>
        <StyledCardBottom>
          <StyledCapital>{capital}</StyledCapital>
        </StyledCardBottom>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default Card;
