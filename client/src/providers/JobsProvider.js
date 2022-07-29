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
  // const [filteredJobs, setFilteredJobs] = useState([])

  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    console.log('getJobs called')
    try {
      let res = await axios.get('/api/jobs')
      setJobs(res.data)
      // setLoading(false)
      // setFilteredJobs(res.data.filter((j) => {
      //   return !userJobs.some((uj) => {
      //     return j.id === uj.job_id
      //   })
      // }))
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
      // props.addJobToUI(job)
    } catch(err) {
      alert("Error occurred adding a job")
    }
  }



  return (

    <JobsContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobsContext.Provider>
  )
};
export default JobsProvider;