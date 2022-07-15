

import Card from 'react-bootstrap/Card';

import { Draggable } from 'react-beautiful-dnd';

const UserJobCard = (props) => {

    return (

        <Draggable key={props.id} draggableId={props.id.toString()} index={props.index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Card key={'primary'} style={{ margin: '15px' }} >
                        <Card.Header>Posted by {props.email}</Card.Header>
                        <Card.Body>
                            <Card.Title>Job Title: {props.jobname}</Card.Title>
                            <Card.Text>
                                <p>Job Description: {props.description}</p>
                                <p>{props.location}</p>
                                <p>userJob ID:{props.id}</p>
                                <p>Job ID: {props.job_id}</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            {props.companyname}
                            {props.baselocation}
                        </Card.Footer>
                    </Card>
                </div>
            )}
        </Draggable>



    );
}
export default UserJobCard;