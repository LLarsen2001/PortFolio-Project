import Card from 'react-bootstrap/Card'

const NoteCard = ({ title, body }) => {
  return (
    <Card style={{marginTop: "10px"}}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{body}</Card.Subtitle>
      </Card.Body>
    </Card>

  )
}

export default NoteCard