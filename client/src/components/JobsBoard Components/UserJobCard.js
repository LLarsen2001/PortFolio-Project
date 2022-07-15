
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';


import { Draggable } from 'react-beautiful-dnd';

const Cardstyle = styled.div`
  max-width: 19vw;
  display: flex;
  border-radius: 45px;
  padding: 15px 15px;
  
`;
const Cardjobbodystyle = styled.div`
  display-left: left;

`

const Cardlocationtext = styled.div`
  font-size: 12px;
`;


const UserJobCard = (props) => {

    return (

        <Draggable key={props.id} draggableId={props.id.toString()} index={props.index}>
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
                                <Card.Text> <Cardlocationtext>Posted by: {props.email}  </Cardlocationtext></Card.Text>
                            </CardHeader>
                            <Cardjobbodystyle>
                                <Card.Body>
                                    <Card.Text>
                                        <p><b>{props.jobname}</b>  <Cardlocationtext>{props.location}</Cardlocationtext></p>
                                        <p>
                                            {props.description}
                                        </p>
                                    </Card.Text>

                                </Card.Body>
                                <Card.Footer>

                                    <Card.Text>
                                        <p><b>{props.companyname}</b><Cardlocationtext>{props.baselocation}</Cardlocationtext></p>

                                        <p>{props.about}</p>
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





