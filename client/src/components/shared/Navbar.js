import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

const BuildingNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const renderNavItems = () => {
        if (user) {
            return (
                <>
                    <LinkContainer to="/account"><Nav.Link href="/account">Account</Nav.Link></LinkContainer>
                    <Nav.Link href={logout()}>Logout</Nav.Link>
                    
                </>
            );
        } else {
            return (
                <>


                    <LinkContainer to="/login">
                    <Nav.Link href="/login">Login</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    </LinkContainer>
                    



                </>
            );
        }
    };
    return (

        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand href="/home">JobSeek</Navbar.Brand>
                    </LinkContainer>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                        <Nav.Link href="/home">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/hooks">
                        <Nav.Link href="/hooks">Hooks</Nav.Link>
                        </LinkContainer>
                        {renderNavItems()}
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default BuildingNavbar;
