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
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    <Nav.Link href="/jobs">Jobs</Nav.Link>
                    <Nav.Link href="/jobsboard">Jobs Board</Nav.Link>

                    <Nav.Link as={'li'} onClick={logout}>Logout</Nav.Link>

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
                        <Nav.Link href="/signup">Sign Up</Nav.Link>

                        {renderNavItems()}
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default BuildingNavbar;
