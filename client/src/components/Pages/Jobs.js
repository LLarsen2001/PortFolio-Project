import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Job from './Job'
import { UserJobsContext } from '../../providers/UserJobsProvider'
import styled from 'styled-components'
import SearchBar from './Search'
import ModalDemo from '../../demos/ModalDemo'
import Button from 'react-bootstrap/esm/Button'

const JobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 200ms;
  overflow: hidden;
  border-radius:$radius;
  
  `

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const add = true;
 
    
  useEffect(() => {
    getJobs()
  }, [])

  const getJobs = async () => {
    try {
      let res = await axios.get('/api/jobs')
      setJobs(res.data)
      setLoading(false)
    } catch (err) {
      alert("Error with getJobs")
    }
  }

  const renderJobs = () => {
    if (loading) {
      return <p>Loading</p>
    }

    return jobs.map(j => {
      return (<div className='jobpage'>
        <Job key={j.id} {...j} />
      </div>
      )
    })
  }

  return (
    <div>
      <h1>Discover Jobs</h1>
      <div>
      <Button variant="primary" onClick={handleShow}>
        Add Job
      </Button>
      <ModalDemo show={show} handleClose={handleClose} add={add}/>
      </div>
      <div>
        <SearchBar />
      </div>
      <JobContainer>
        {renderJobs()}
      </JobContainer>
    </div>

  )
}
export default Jobs;