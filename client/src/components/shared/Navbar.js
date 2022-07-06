import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const BuildingNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const renderNavItems = () => {
        if (user) {
            return (
                <>
                    <Nav.Link href="/account">Account</Nav.Link>
                    <Nav.Link as={'li'} onClick={logout}>Logout</Nav.Link>
                </>
            );
        } else {
            return (
                <>



                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>



                </>
            );
        }
    };
    return (

        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/home">JobSeek</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/hooks">Hooks</Nav.Link>
                        {renderNavItems()}
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default BuildingNavbar;
