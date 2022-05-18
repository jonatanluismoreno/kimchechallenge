import React from "react";
import styled from "styled-components";

import ButtonContainer from "../ButtonContainer";
import CategoryContainer from "../CardsContainer";
import Footer from "../Footer";
import Loading from "../Loading";

const StyledMain = styled.main`
  background-color: #c6ac93;
  width: 100%;
  height: 100%;
`;

const Main = ({ loading, setShowByContinent, content }) => {
  return (
    <StyledMain>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ButtonContainer setShowByContinent={setShowByContinent} />
          <CategoryContainer content={content} />
          <Footer />
        </>
      )}
    </StyledMain>
  );
};

export default Main;
