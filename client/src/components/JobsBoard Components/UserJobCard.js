import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UserJobCard = (props) => {

    return (

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
                            {props.baselocation}
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>



    );
}
export default UserJobCard;