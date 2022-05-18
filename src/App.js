import React, { useState } from "react";
import useFilteredData from "./hooks/useFilteredData";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [inputContent, setInputContent] = useLocalStorage("inputContent", "");
  const [showByContinent, setShowByContinent] = useState(true);
  const { results, loading } = useFilteredData(inputContent, showByContinent);

  return (
    <>
      <Header setInputContent={setInputContent} inputContent={inputContent} />
      <Main
        loading={loading}
        setShowByContinent={setShowByContinent}
        content={results}
      />
    </>
  );
}
export default App;
