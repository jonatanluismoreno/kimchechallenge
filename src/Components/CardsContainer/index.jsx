import React from "react";
import styled from "styled-components";
import Category from "../Category";

const StyledCategoryContainer = styled.div``;

const CategoryContainer = ({ content }) => {
  return (
    <StyledCategoryContainer>
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
    </StyledCategoryContainer>
  );
};

export default CategoryContainer;
