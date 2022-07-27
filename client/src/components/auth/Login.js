import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'




const Login = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (r) => {
        r.preventDefault()

        login({ email, password })
    }

    return (

        <>

            <Card
                style={{
                    width: "25vw",
                    height: "21vw",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    float: "none",
                    marginTop: "7rem",
                    boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                }}
            >
                <Card.Header>
                    <Card.Title>Login</Card.Title>
                </Card.Header>
                <Card.Body>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                required
                                autoFocus
                                value={email}
                                onChange={(r) =>
                                    setEmail(r.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                minLength={6}
                                required
                                autoFocus
                                value={password}
                                onChange={(r) => setPassword(r.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>

    )
}
export default Login