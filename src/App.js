import React, { useState } from "react";
import useFilteredData from "./hooks/useFilteredData";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [inputContent, setInputContent] = useState("");
  const [showByContinent, setShowByContinent] = useState(true);
  const { results, loading } = useFilteredData(inputContent, showByContinent);

  const toggleSearchBy = () => {
    setShowByContinent(!showByContinent);
  };

  return (
    <>
      <Header setInputContent={setInputContent} />
      <Main
        loading={loading}
        toggleSearchBy={toggleSearchBy}
        content={results}
      />
    </>
  );
}
export default App;
