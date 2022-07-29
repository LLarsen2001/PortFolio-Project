import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Job from './Job'
import { UserJobsContext } from '../../providers/UserJobsProvider'
import styled from 'styled-components'
import SearchBar from './Search'

import Button from 'react-bootstrap/esm/Button'
import AddJobModal from '../shared/AddJobModal'
import { JobsContext } from '../../providers/JobsProvider'

const JobContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 19.5vw);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 9.25rem;
  padding-top: 2rem;
  
  
  `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const Jobs = () => {
  const { jobs } = useContext(JobsContext)
  const { userJobs } = useContext(UserJobsContext)
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderJobs = () => {
    // if (loading) {
    //   return <p>Loading</p>
    // }
    // console.log(filteredJobs)
    let jobsFiltered = jobs.filter((j) => {
      return !userJobs.some((uj) => {
        return j.id === uj.job_id
      })
    })
    return jobsFiltered.map(j => {
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
      <Container style={{ paddingBottom: '1rem', }}>
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