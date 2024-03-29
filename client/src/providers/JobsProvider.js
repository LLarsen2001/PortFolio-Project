import axios from "axios"
import React, { useContext, useEffect, useState } from "react"

export const JobsContext = React.createContext();

const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([])
  const [job, setJob] = useState(null)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    getJobs()
    getCompanies()
  }, [])

  const getJobs = async () => {
    console.log('getJobs called')
    try {
      let res = await axios.get('/api/jobs')
      setJobs(res.data)
    } catch (err) {
      alert("Error with getJobs")
    }
  }

  const addJob = async (job) => {
    console.log('addJob called')
    try {
      let res = await axios.post('/api/jobs', job)
      console.log(res.data)
      setJobs([res.data, ...jobs])
    } catch(err) {
      alert("Error occurred adding a job")
    }
  }

  const updateJob = async (updatedJob, id) => {
  console.log('updateJob called')
    try {
      let res = await axios.put(`/api/jobs/${id}`, updatedJob)
      const updatedArray = jobs.map((j)=> {
        if(j.id === id) {
          return res.data
        }
        return j
      })
      console.log(res.data)
      setJobs(updatedArray)
    } catch(err) {
      alert("Error occurred updating a job")
    }
  }

  const getCompanies = async () => {
    try {
      let res = await axios.get('/api/companies')
      setCompanies(res.data)
    } catch(err) {
      alert("Error occurred getting companies")
    }
  }


  const addCompany = async (company) => {
    try {
      let res = await axios.post('/api/companies', company)
      setCompanies([...companies, res.data])
    } catch(err) {
      alert("Error occurred adding a company")
    }
  }

  const setJobData = (id) => {
    console.log('setJobData called,')
    setJob(jobs.filter(j => j.id === id))
   
}


const deleteJob = async (id) => {
  try {
      debugger
      console.log(id)
      await axios.delete(`/api/jobs/${id}`);
      setJobs(jobs.filter((e) => e.id !== id))
  } catch (err) {
      alert('error has occured in the delete a users jobs ')
  }
}

  return (

    <JobsContext.Provider value={{ jobs, companies, addJob, addCompany, updateJob, setJobData, job, deleteJob }}>
      {children}
    </JobsContext.Provider>
  )
};
export default JobsProvider;