import { useContext, useState } from "react"
import axios from "axios"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/esm/Button"
import { JobsContext } from "../../providers/JobsProvider"

const CompanyForm = (props) => {
  const { addCompany } = useContext(JobsContext)
  const [companyname, setCompanyName] = useState("")
  const [baselocation, setBaseLocation] = useState("")
  const [about, setAbout] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addCompany({companyname, baselocation, about})
    props.toggleForms()
  }

  return (
    <div>
      <Button size="sm" onClick={props.toggleForms}>Go Back</Button>
      <h1>Add A Company</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="companyname">
          <Form.Label>Company Name: </Form.Label>
          <Form.Control
            type='companyname'
            placeholder='Enter Company Name'
            value={companyname}
            onChange={(e) => {
              setCompanyName(e.target.value)
            }}
          />
          </Form.Group>

          <Form.Group className="mb-3" controlId="baselocation">
          <Form.Label>Address: </Form.Label>
          <Form.Control
            type='baselocation'
            placeholder='Enter Company Address'
            value={baselocation}
            onChange={(e) => {
              setBaseLocation(e.target.value)
            }}
          />
          </Form.Group>

          <Form.Group className="mb-3" controlId="about">
          <Form.Label>About: </Form.Label>
          <Form.Control
            type='about'
            placeholder='Enter About Info'
            value={about}
            onChange={(e) => {
              setAbout(e.target.value)
            }}
          />
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default CompanyForm