import Card from 'react-bootstrap/Card'
import React from 'react'

const Job = (props) => {
  const formatSalary = () => {
    return "$" + props.salary + "/yr"
  }

  return (
    <Card classNameborder="secondary" style={{ width: '18rem' }}>
      <Card.Header>{props.jobname}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
        {props.companyname}
        <hr />
          {props.description}
          <hr />
          {formatSalary()}
        </Card.Text>
        <Card.Footer>
          {props.location}
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Job