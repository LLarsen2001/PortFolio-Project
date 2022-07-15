import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import styled from 'styled-components';

const Cardstyle = styled.div`
  
  display: flex;
  border-radius: 45px;
  padding: 15px 15px;
  margin-right: 45px;
`;
const Cardjobbodystyle = styled.div`
  display-right: column;

`

const Cardbodystyle = styled.div`
  
  display: center;
  border-radius: 5px;
  padding: 15px 15px;
  
`;
const Cardlocationtext = styled.div`
  font-size: 12px;
`;



function UserJbCard() {
  return (
    <Cardstyle>
      <Card
        text='white'
        style={{
          width: '25rem', background: "#2145F7", borderRadius: "30px"
        }}>
        <CardHeader>
          <Card.Text>Posted by:</Card.Text>
        </CardHeader>
        <Cardjobbodystyle>
          <Card.Body>
            <Card.Text>
              <p><b>Position Title:</b>  <Cardlocationtext>Job's location</Cardlocationtext></p>
              <p>

                Job's Description
              </p>
            </Card.Text>

          </Card.Body>
          <Card.Footer>

            <Card.Text>
              <p><b>Company's Title</b><Cardlocationtext>Company's Location</Cardlocationtext></p>

              <p>About our Company</p>
            </Card.Text>
          </Card.Footer>
        </Cardjobbodystyle>
      </Card >
    </Cardstyle >
  );
}

export default UserJbCard;