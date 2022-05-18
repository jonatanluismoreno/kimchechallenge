import React from "react";
import styled from "styled-components";

import Card from "../Card";

const StyledCategory = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 1em;
  justify-items: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  padding-bottom: 2em;
  margin: 0;
`;

const StyledSubtitle = styled.h2`
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  color: #5b453d;
`;

const Category = ({ name, countries, id }) => {
  return (
    <>
      <StyledSubtitle>{name}</StyledSubtitle>
      <StyledCategory key={id}>
        {countries.map((b) => (
          <Card
            name={b.name}
            key={b.name}
            emoji={b.emoji}
            capital={b.capital}
            code={b.code}
          />
        ))}
      </StyledCategory>
    </>
  );
};

export default Category;
