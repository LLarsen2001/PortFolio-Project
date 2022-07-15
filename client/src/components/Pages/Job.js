import Card from 'react-bootstrap/Card'
import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Job = (props) => {

  return (
    <Row xs={1} md={2} className="g-4">
     
        <Col>
          <Card key={'primary'} style={{ margin: '15px' }} >


            <Card.Header>Posted by {props.email}</Card.Header>
            <Card.Body>
              <Card.Title>Job Title: {props.jobname}</Card.Title>
              <Card.Text>
                <p>Job Description: {props.description}</p>
                <p>{props.location}</p>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              {props.companyname}

            </Card.Footer>
          </Card>
        </Col>
     
    </Row>
  )
}

export default Job