
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';
import { DateTime, Duration } from "luxon";

import { Draggable } from 'react-beautiful-dnd';
import { useContext, useEffect, useState } from 'react';
import { UserJobsContext } from '../../providers/UserJobsProvider';
import Button from 'react-bootstrap/esm/Button';
import ModalDemo from '../../demos/ModalDemo';





const DeleteButton = styled.div`
float: right;
border-radius: 50px;
background-coler: #0a0a23;
 `;

const Cardjobbodystyle = styled.div`
  display-left: left;

`;

const Cardlocationtext = styled.div`
  font-size: 12px;
`;


const UserJobCard = ({ job, index }) => {
    const [cardColor, setCardColor] = useState("")
    const { deleteUserJob } = useContext(UserJobsContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const add = false;

    useEffect(() => {
        diff(job.created_at);
    }, [])

    const format = (time) => {
        return DateTime.fromISO(time).toFormat('ffff')
    }
    const diff = (time) => {
        let d = DateTime.fromISO(time).diffNow("days")
        let day = { days: d.days * -1 }
        let duration = Duration.fromObject(day)
        if (duration.values.days <= 1) {
            return setCardColor("#21F778")
        } else if (duration.values.days <= 2) {
            return setCardColor("#F7B821")

        } else {
            return setCardColor("#D50404")
        }
    }


    return (

        <Draggable key={job.id} draggableId={job.id.toString()} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >

                    <Card
                        text='white'
                        style={{
                            width: '19vw', height: '22vw', borderRadius: "45px", background: cardColor, justifyContent: "space-between", overflow: "hidden", margin: ".4vw"
                        }}>
                        <Card.Header>
                            <Button variant="primary" onClick={handleShow}>
                                Edit
                            </Button>
                            <ModalDemo show={show} handleClose={handleClose} add={add} job_id = {job.id}/>
                            <DeleteButton> <button onClick={() => deleteUserJob(job.id)}>X</button></DeleteButton>
                            <Card.Text> <Cardlocationtext>Posted by: {job.email}  </Cardlocationtext></Card.Text>
                        </Card.Header>
                        <Cardjobbodystyle>
                            <Card.Body>
                                <Card.Text>
                                    <p><b>{job.jobname}</b>  <Cardlocationtext>{job.location}</Cardlocationtext></p>
                                    <p>
                                        {job.description}{format(job.created_at)}
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

                </div>
            )}
        </Draggable>



    );
}
export default UserJobCard;





