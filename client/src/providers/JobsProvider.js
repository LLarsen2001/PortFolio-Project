import axios from "axios"
import React, { useContext, useEffect, useState } from "react"


import { AuthContext } from "./AuthProvider"
import { UserJobsContext } from "./UserJobsProvider";

export const JobsContext = React.createContext();

const JobsProvider = ({ children }) => {
  const { user } = useContext(AuthContext)
  const { userJobs } = useContext(UserJobsContext)
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
    } catch (err) {
      alert("Error occurred adding a job")
    }
  }

  const updateJob = async (updatedJob, id) => {
    console.log('updateJob called')
    try {
      let res = await axios.put(`/api/jobs/${id}`, updatedJob)
      const updatedArray = jobs.map((j) => {
        if (j.id === id) {
          return res.data
        }
        return j
      })
      console.log(res.data)
      setJobs(updatedArray)
    } catch (err) {
      alert("Error occurred updating a job")
    }
  }

  const deleteJob = async (id) => {
    try {
      console.log(id)
      await axios.delete(`/api/users/${user.id}/jobs/${id}`);
      setJobs(jobs.filter((e) => e.id !== id))
    } catch (err) {
      alert('error has occured in the delete a users jobs ')
    }
  }

  const getCompanies = async () => {
    try {
      let res = await axios.get('/api/companies')
      setCompanies(res.data)
    } catch (err) {
      alert("Error occurred getting companies")
    }
  }


  const addCompany = async (company) => {
    try {
      let res = await axios.post('/api/companies', company)
      setCompanies([...companies, res.data])
    } catch (err) {
      alert("Error occurred adding a company")
    }
  }

  return (

    <JobsContext.Provider value={{ jobs, companies, addJob, addCompany, updateJob, deleteJob }}>
      {children}
    </JobsContext.Provider>
  )
};
export default JobsProvider;