import Card from 'react-bootstrap/Card'
import React, { useContext } from 'react'
import styled from 'styled-components';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import Button from 'react-bootstrap/esm/Button';
import { UserJobsContext } from '../../providers/UserJobsProvider';

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

const Job = (props) => {
  const { addUserJob } = useContext(UserJobsContext)
  const formatSalary = () => {
    return "$" + props.salary + "/yr"
  }

  const handleSubmit = () => {
    addUserJob({ job_id: props.id, status: 'wishlist' })
  }
  return (
    <Cardstyle>
      <Card
        text='white'
        style={{
          width: '19vw', height: '22vw', background: "#2145F7", borderRadius: "45px", justifycontent: "space-between", padding: '15px 15px'
        }}>
        <CardHeader>
          <Card.Text> <Cardlocationtext>Posted by: {props.email} </Cardlocationtext></Card.Text>
        </CardHeader>
        <Cardjobbodystyle>
          <Card.Body>
            <Card.Text>
              <p><b>{props.jobname}</b>  <Cardlocationtext>{props.location}</Cardlocationtext></p>
              <p>
                {props.description}
                {formatSalary()}
              </p>
              <p>
                {props.id}
              </p>

            </Card.Text>

          </Card.Body>
          <Card.Footer>

            <Card.Text>

              <p><b>{props.companyname} </b><Cardlocationtext>{props.baselocation}</Cardlocationtext></p>
              <p>{props.about}<button onClick={handleSubmit}>add</button></p>

            </Card.Text>
          </Card.Footer>
        </Cardjobbodystyle>
      </Card >
    </Cardstyle >
  )
}



export default Job