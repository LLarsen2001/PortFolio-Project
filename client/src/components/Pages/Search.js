import React, { useState, useRef } from "react";

const SearchBar = ({ searchFunction }) => {
  const [query, setQuery] = useState("");
  const [searchJob, setSearchJob] = useState([]);
  const [showJob, setShowJob] = useState(false);
  const [filteredJob, setFilteredJob] = useState([]);
  const inputRef = useRef();

  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    marginRight: "0.3rem"
  };


  const submitSearch = () => {
    if (query !== "") {
      setSearchJob((prevJob) => [...prevJob, query].sort());
      searchFunction(query);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyUp = (event) => { 
    event.preventDefault();
    if (query) {
      setFilteredJob(searchJob.filter((item) => item.includes(query)));
      setShowJob(true);
    } else {
      setShowJob(false);
    }
    if (event.keyCode === 13) {
      submitSearch();
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    submitSearch();
  };

  return (
    <>
      <input
        style={BarStyling}
        ref={inputRef}
        value={query}
        placeholder={"Search"}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
      {showJob && filteredJob ? (
        <ul style={{ listStyleType: "none", textAlign: "left" }}>
          {filteredJob.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      ) : null}
      <button onClick={handleClick}>Submit</button>
    </>
  );
};

export default SearchBar;