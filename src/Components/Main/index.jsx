import React from "react";
import styled from "styled-components";

const StyledMain = styled.main``;

const Main = ({ error, loading }) => {
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  return <StyledMain></StyledMain>;
};

export default Main;
