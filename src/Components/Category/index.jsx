import React from "react";
import styled from "styled-components";

import Card from "../Card";

const StyledCategory = styled.ul``;

const Category = ({ name, countries, id }) => {
  return (
    <StyledCategory key={id}>
      {name}
      {countries.map((b) => (
        <Card name={b.name} key={b.name} />
      ))}
    </StyledCategory>
  );
};

export default Category;
