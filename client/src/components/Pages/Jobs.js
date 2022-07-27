import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Job from './Job'
import { UserJobsContext } from '../../providers/UserJobsProvider'
import styled from 'styled-components'
import SearchBar from './Search'
import Button from 'react-bootstrap/esm/Button'
import AddJobModal from '../shared/AddJobModal'

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 19vw);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  
  `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const Jobs = () => {
  const { userJobs } = useContext(UserJobsContext)
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const add = true


  useEffect(() => {
    getJobs()

  }, [])

  //Todo Maybe make a job provider so we can have the jobs pages update when you click the add job to job board.
  const getJobs = async () => {
    try {
      let res = await axios.get('/api/jobs')
      setJobs(res.data)
      setLoading(false)
      setFilteredJobs(res.data.filter((j) => {
        return !userJobs.some((uj) => {
          return j.id === uj.job_id
        })
      }))
    } catch (err) {
      alert("Error with getJobs")
    }
  }



  const renderJobs = () => {
    if (loading) {
      return <p>Loading</p>
    }

    return filteredJobs.map(j => {
      return (<div className='jobpage'>
        <Job key={j.id} {...j} />
      </div>
      )
    })
  }

  return (
    <div>
      <Container>
        <h1>Discover Jobs</h1>
      </Container>
      <Container>
        <div>

          <Button variant="primary" onClick={handleShow}>
            Add Job
          </Button>
          <AddJobModal show={show} handleClose={handleClose} />
        </div>
      </Container>
      <Container>
        <div>
          <SearchBar />
        </div>
      </Container>
      <JobContainer>
        {renderJobs()}
      </JobContainer>
    </div>

  )
}
export default Jobs;