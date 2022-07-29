import Form from 'react-bootstrap/Form'
import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import { AuthContext } from '../providers/AuthProvider'
import { MyLink } from './shared/Navbar'
import { useNavigate } from 'react-router-dom'
import { JobsContext } from '../providers/JobsProvider';

const JobForm = (props) => {
  const { addJob, companies } = useContext(JobsContext)
  const { user } = useContext(AuthContext)
  const [jobname, setJobName] = useState("")
  const [company_id, setCompanyID] = useState(null)
  const [salary, setSalary] = useState(null)
  const [description, setDescription] = useState("")
  const [remote, setRemote] = useState(false)
  const [location, setLocation] = useState("")
  const user_id = user.id
  const isFilled = false

  const handleSubmit = (e) => {
    e.preventDefault()
    addJob({jobname, company_id, salary, description, remote, location, user_id, isFilled})
    props.handleClose()
  }

  return (
    <div>
      <h1>Post a Job</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="jobname">
          <Form.Label>Job Name: </Form.Label>
          <Form.Control
            type='jobname'
            placeholder='Enter Job Name'
            value={jobname}
            onChange={(e) => {
              setJobName(e.target.value)
            }}
          />
          </Form.Group>
          </Row>
          
          <Row className="mb-3">
          <Form.Group className="mb-3" controlId="description">
          <Form.Label>Job Description: </Form.Label>
          <Form.Control
            type='description'
            placeholder='Enter Job Description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
          </Form.Group>
          </Row>
          
          <Row className="mb-3">
          <Form.Group className="mb-3" controlId="salary">
          <Form.Label>Salary: </Form.Label>
          <Form.Control
            type='salary'
            placeholder='Enter Salary'
            value={salary}
            onChange={(e) => {
              setSalary(e.target.value)
            }}
          />
          </Form.Group>
          </Row>
          
          <Row className="mb-3">
          <Form.Group className="mb-3" controlId="location">
          <Form.Label>Location: </Form.Label>
          <Form.Control
            type='location'
            placeholder='Enter Location'
            value={location}
            onChange={(e) => {
              setLocation(e.target.value)
            }}
          />
          </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col>
          <Form.Group className="mb-3" controlId="company_id">
          <Form.Label>Company: </Form.Label>
          <Form.Control
            as="select"
            type="company"
            value={company_id}
            onChange={(e) => {
              setCompanyID(e.target.value)
            }}>
            <option>Choose a company</option>
            {companies.map(option => (
            <option key={option.id} value={option.id}>
              {option.companyname}
            </option>
          ))}
          </Form.Control>
          </Form.Group>
          
          <Button size="sm" onClick={props.toggleForms}>Add Company</Button>

          </Col>

          <Col>
          <Form.Group className="mb-3" controlId="remote">
          <Form.Label>Remote: </Form.Label>
          <Form.Control
            as="select"
            type="remote"
            value={remote}
            onChange={(e) => {
              setRemote(e.target.value)
            }}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Form.Control>
          </Form.Group>
          </Col>
          </Row>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default JobForm
