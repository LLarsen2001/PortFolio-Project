
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';


import { Draggable } from 'react-beautiful-dnd';
import { useContext } from 'react';
import { UserJobsContext } from '../../providers/UserJobsProvider';

const Cardstyle = styled.div`
  max-width: 19vw;
  display: flex;
  border-radius: 45px;
  padding: 15px 15px;
  
`;
const DeleteButton = styled.div`
float: right;
border-radius: 50px;
background-coler: #0a0a23;
 `
const Cardjobbodystyle = styled.div`
  display-left: left;

`

const Cardlocationtext = styled.div`
  font-size: 12px;
`;


const UserJobCard = ({ job, index }) => {
    const { deleteUserJob } = useContext(UserJobsContext)
    console.log(job)
    return (

        <Draggable key={job.id} draggableId={job.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Cardstyle>
                        <Card
                            text='white'
                            style={{
                                width: '25rem', background: "#2145F7", borderRadius: "30px"
                            }}>
                            <CardHeader>
                                <DeleteButton> <button onClick={() => deleteUserJob(job.id)}>X</button></DeleteButton>
                                <Card.Text> <Cardlocationtext>Posted by: {job.email}  </Cardlocationtext></Card.Text>
                            </CardHeader>
                            <Cardjobbodystyle>
                                <Card.Body>
                                    <Card.Text>
                                        <p><b>{job.jobname}</b>  <Cardlocationtext>{job.location}</Cardlocationtext></p>
                                        <p>
                                            {job.description}
                                        </p>
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>

                                    <Card.Text>
                                        <p><b>{job.companyname}</b><Cardlocationtext>{job.baselocation}</Cardlocationtext></p>

                                        <p>{job.about}</p>
                                    </Card.Text>
                                </Card.Footer>
                            </Cardjobbodystyle>
                        </Card >
                    </Cardstyle >
                </div>
            )}
        </Draggable>



    );
}
export default UserJobCard;





