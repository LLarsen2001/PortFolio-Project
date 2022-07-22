import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Job from './Job'
import { UserJobsContext } from '../../providers/UserJobsProvider'
import styled from 'styled-components'
import SearchBar from './Search'
import ModalDemo from '../../demos/ModalDemo'
import Button from 'react-bootstrap/esm/Button'

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
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const add = true


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
      <Container>
        <h1>Discover Jobs</h1>
      </Container>
      <Container>
        <div>

          <Button variant="primary" onClick={handleShow}>
            Add Job
          </Button>
          <ModalDemo show={show} handleClose={handleClose} add={add} />
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