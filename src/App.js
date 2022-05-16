import React, { useState, useRef } from "react";
import useFilteredData from "./hooks/useFilteredData";

function App() {
  const [inputContent, setInputContent] = useState("");
  const { results, error, loading } = useFilteredData(inputContent);
  const inputRef = useRef(null);

  const handleChange = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      setInputContent(inputRef.current.value);
    } else {
      setInputContent("");
    }
  };
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  return (
    <div>
      <input
        ref={inputRef}
        className="input"
        type="text"
        placeholder="Search for a country"
        onChange={handleChange}
      ></input>
    </div>
  );
}
export default App;
