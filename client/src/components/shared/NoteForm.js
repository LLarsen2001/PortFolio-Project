import axios from 'axios'
import { useContext, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form'
import { FormDataContext } from '../../providers/FormDataProvider'

const NoteForm = () => {
  const { job } = useContext(FormDataContext)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addNote = async (note) => {
    try {
      await axios.post(`/api/userjobs/${job[0].id}/notes`, note)
    } catch(err) {
      alert("Error occurred adding a note")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addNote({title, body})
  }

  return (
    <div>
    <h1>Note Form</h1>
    <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title: </Form.Label>
          <Form.Control
            type='title'
            placeholder='Enter Title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
          />
          </Form.Group>
          </Row>
          
          <Row className="mb-3">
          <Form.Group className="mb-3" controlId="body">
          <Form.Label>Enter Note: </Form.Label>
          <Form.Control
            type='body'
            placeholder='Note'
            value={body}
            onChange={(e) => {
              setBody(e.target.value)
            }}
          />
          </Form.Group>
          </Row>

        <Button variant='primary' type='submit'>Submit</Button>
      </Form>
      </div>
  )
}

export default NoteForm