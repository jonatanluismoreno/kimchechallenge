import React from "react";
import styled from "styled-components";

const StyledCards = styled.li``;

const Card = ({ name }) => {
  return <StyledCards>{name}</StyledCards>;
};

export default Card;
