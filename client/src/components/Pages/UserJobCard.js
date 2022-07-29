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
import Badge from 'react-bootstrap/esm/Badge';

const Cardlocationtext = styled.div`
font-size: 12px;
`;
const Titletext = styled.div`
font-size: .9rem;
`;
const UserJobCard = ({ job, index }) => {
    const { setJobData } = useContext(FormDataContext)
    const [cardColor, setCardColor] = useState("")
    const { deleteUserJob, setUserJobData } = useContext(UserJobsContext)
    const [show, setShow] = useState(false);
    const { primary, secondary, tertiary, ujSecondColor, ujThirdColor } = useContext(ThemeContext)
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
            return setCardColor(ujSecondColor)

        } else {
            return setCardColor(ujThirdColor)
        }
    }

    const formatSalary = () => {
        return "$" + job.salary + "/yr"

    }
    const CheckRemote = () => {
        if (job.remote === true) {
            return ('Remote')
        } else {
            return
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
                    <Card className='ujCardBackGround'
                        text='white'
                        style={{


                        }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>

                            <Card.Text style={{ marginRight: 'auto', marginLeft: '.5rem' }}><Cardlocationtext>Created by {job.name}
                                <p> Added on {format(job.created_at)}  </p>

                            </Cardlocationtext>
                            </Card.Text>
                            <ModalDemo show={show} handleClose={handleClose} userJob={userJob} />
                            <button style={{
                                width: "4.2rem", height: "1.5rem", marginleft: 'auto', marginRight: '.5rem', marginTop: '.5rem', fontSize: '1rem'
                            }}
                                onClick={() => {
                                    handleShow(job.id)
                                }}>
                                Notes
                            </button>
                            {/* // <a onClick={() => deleteUserJob(job.id)} className="close"></a> */}
                        </div>
                        <Card.Body style={{ marginTop: '-2.2rem' }}>
                            <Card.Text>
                                <p><b><Titletext>{job.jobname}</Titletext></b>
                                    <Cardlocationtext>{job.companyname}</Cardlocationtext>
                                </p>

                                <div>
                                    <h6>
                                        <Badge style={{ marginLeft: 'auto', marginRight: '.75rem' }}>{job.description}</Badge>
                                        <Badge style={{ marginRight: 'auto', marginLeft: '.75rem' }}>{CheckRemote()}</Badge>

                                    </h6>
                                </div>

                            </Card.Text>
                        </Card.Body>


                        <div style={{
                            display: 'flex', flexDirection: 'row', fontWeight: 'bold', justifyContent: 'spaceBetween'

                        }}>
                            <div style={{ marginRight: 'auto', marginLeft: '1.3rem' }}>
                                <Cardlocationtext>
                                    <p>  {formatSalary()}</p>
                                </Cardlocationtext>
                            </div>


                            <div style={{ marginLeft: 'auto', marginRight: '1.3rem' }}>


                                <Cardlocationtext>
                                    <p>{job.location}</p>
                                </Cardlocationtext>
                            </div>
                        </div>

                    </Card >
                </div>
            )}
        </Draggable>
    );
}

export default UserJobCard;

