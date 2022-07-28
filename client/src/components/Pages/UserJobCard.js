import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { DateTime, Duration } from "luxon";
import "../../App.css"
import { Draggable } from 'react-beautiful-dnd';
import { useContext, useEffect, useState } from 'react';
import { UserJobsContext } from '../../providers/UserJobsProvider';
import Button from 'react-bootstrap/esm/Button';
import ModalDemo from '../../demos/ModalDemo';
import { FormDataContext } from '../../providers/FormDataProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

const UjButtonStyle = styled.button`
  font-size: 12px;
`;

const Cardlocationtext = styled.div`
  font-size: 12px;
`;
const UserJobCard = ({ job, index }) => {
    const { setJobData } = useContext(FormDataContext)
    const [cardColor, setCardColor] = useState("")
    const { deleteUserJob, setUserJobData } = useContext(UserJobsContext)
    const [show, setShow] = useState(false);
    const { primary, secondary, tertiary } = useContext(ThemeContext)
    const userJob = true;
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        console.log(id)
        setUserJobData(id)
        setShow(true)
    }
    useEffect(() => {
        diff(job.created_at);
    }, [])
    const format = (time) => {
        return DateTime.fromISO(time).toFormat('ff')
    }
    const diff = (time) => {
        let d = DateTime.fromISO(time).diffNow("days")
        let day = { days: d.days * -1 }
        let duration = Duration.fromObject(day)
        if (duration.values.days <= 1) {
            return setCardColor(primary)
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
                            width: '19vw',
                            height: '22vw',
                            borderRadius: "45px",
                            background: cardColor,
                            justifyContent: "space-between",
                            overflow: "hidden",
                            margin: ".2vw"
                        }}>
                        <Card.Header >
                            <Button bsPrefix={{
                                width: ".5rem", height: ".5rem"
                            }} variant="primary"
                                onClick={() => {
                                    handleShow(job.id)
                                }}>
                                Add Notes
                            </Button>
                            <ModalDemo show={show} handleClose={handleClose} userJob={userJob} />
                            <a onClick={() => deleteUserJob(job.id)} className="close"></a>
                            <Cardlocationtext>  <Card.Text> Added on {format(job.created_at)}  </Card.Text></Cardlocationtext>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{job.jobname} </Card.Title>
                            <Card.Text>
                                <p><Cardlocationtext>Located At {job.location}</Cardlocationtext></p>
                                <p>
                                    {job.description}
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Text>
                                {/* <p><b>{job.companyname}</b><Cardlocationtext>{job.baselocation}</Cardlocationtext></p> */}
                                <p>{job.about}</p>
                            </Card.Text>
                        </Card.Footer>
                    </Card >
                </div>
            )}
        </Draggable>
    );
}
export default UserJobCard;