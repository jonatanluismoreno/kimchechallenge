import React from "react";
import styled from "styled-components";

import ButtonContainer from "../ButtonContainer";
import CategoryContainer from "../CardsContainer";
import Footer from "../Footer";
import Loading from "../Loading";

const StyledMain = styled.main`
  background-color: #cfb9a5;
  width: 100%;
  height: 100%;
`;

const Main = ({ loading, toggleSearchBy, content }) => {
  return (
    <StyledMain>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ButtonContainer handleButton={toggleSearchBy} />
          <CategoryContainer content={content} />
          <Footer />
        </>
      )}
    </StyledMain>
  );
};

export default Main;
