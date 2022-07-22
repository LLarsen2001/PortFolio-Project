import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'

const SignInC = styled.div`
display: center;

justify-content: center;
`

const SignUp = () => {
    const { Signup } = useContext(AuthContext)
    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState("123456")
    const [passwordConfirm, setPasswordconfirm] = useState("123456")

    const handleSubmit = (r) => {
        r.preventDefault()
        if (password.length < 6) {
            alert('Passwaor not long enough')
        }
        if (password !== passwordConfirm) {
            alert('passwords do not match')
        }
        Signup({ email, password })
    }

    return (
        <SignInC>
            <>
                <Card
                    style={{ width: "25vw", height: "24vw", justifyContent: "center", alignItems: "center" }}
                >
                    <Card.Header>
                        <Card.Title>Sign Up!</Card.Title>
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
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
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
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        </SignInC>
    )
}
export default SignUp