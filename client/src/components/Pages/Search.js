import axios from "axios"
import React, { useState, useRef, useEffect } from "react"
import Job from "./Job"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [searchJob, setSearchJob] = useState([])
  const [showJob, setShowJob] = useState(false)
  const [filteredJob, setFilteredJob] = useState([])
  const inputRef = useRef()

  const BarStyling = {
    textAlign: "center",
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    marginRight: "0.3rem"
  }

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      let res = await axios.get('/api/jobs')
      setSearchJob(res.data)
    } catch (err) {
      alert("Error with getJobs")
    }
  }
//ref https://codesandbox.io/s/94kz8?file=/src/SearchBar.js

  const submitSearch = () => {
    if (query !== "") {
      setSearchJob((prevJob) => [...prevJob, query].sort())
      // searchFunction(query)
    }
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  const handleKeyUp = (event) => { 
    event.preventDefault()
    if (query) {
     
      setFilteredJob(searchJob.filter((item) => item.jobname.includes(query)))
      setShowJob(true)
    } else {
      setShowJob(false)
    }
    if (event.keyCode === 13) {
      submitSearch()
    }
  }

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
        <ul style={{ listStyleType: "none", textAlign: "center" }}>
          {filteredJob.map((item, index) => {
            return <Job key={index} {...item}></Job>
          })}
        </ul>
      ) : null}
    </>
  )
}

export default SearchBar