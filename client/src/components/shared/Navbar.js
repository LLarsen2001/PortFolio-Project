import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'
import Button from "react-bootstrap/esm/Button";
import { ThemeContext } from "../../providers/ThemeProvider";

export const MyLink = ({ url, children }) => {
    return (
        <>
            <LinkContainer to={url} >
                <Nav.Link > {children}</Nav.Link>
            </LinkContainer>
        </>
    )
};
const BuildingNavbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { primary } = useContext(ThemeContext)
    const ButtonStyle = () => (

        <style type="text/css">
            {`
    .btn-signup {
      background-color: ${primary};
      color: white;
      font-weight: bold;
    }
    .btn-xxl {
      padding: .5rem;
      font-size: 1rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }
    `}
        </style>
    )
    const renderNavItems = () => {
        if (user) {
            return (
                <>
                    {ButtonStyle()}
                    <Navbar bg="light" variant="light" style={{
                        paddingLeft: "2rem",
                    }}>
                        <LinkContainer to="/">
                            <Navbar.Brand href="/Home">JobSeek</Navbar.Brand>
                        </LinkContainer>
                        <Nav className="me-auto">
                            <MyLink url="/jobs">Discover Jobs</MyLink>
                            <MyLink url="/jobsboard">Job Board</MyLink>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/profile" style={{ marginRight: ".75rem", color: primary, fontWeight: "bold", fontSize: "1rem" }}>
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                            <div style={{ borderLeft: "1px solid grey" }}></div>
                            <Button variant="signup" onClick={logout} size="xxl">Logout</Button>
                        </Nav>
                    </Navbar>
                </>
            );
        } else {
            return (
                <>
                    {ButtonStyle()}
                    <Navbar bg="light" variant="light" style={{
                        paddingLeft: "2rem",
                    }}>
                        <LinkContainer to="/">
                            <Navbar.Brand href="/home">JobSeek</Navbar.Brand>
                        </LinkContainer>
                        <Nav className="me-auto">

                            <MyLink url="/jobs">Jobs</MyLink>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/login" style={{ marginRight: "1.75rem", color: primary, fontWeight: "bold", fontSize: "1rem" }}>
                                <Nav.Link > Login</Nav.Link>
                            </LinkContainer>
                            <div style={{ borderLeft: "1px solid grey" }}></div>
                            <Button href="/signup" variant="signup" size="xxl">Sign Up</Button>
                        </Nav>
                    </Navbar>
                </>
            );
        }
    }
    return (renderNavItems());
}
export default BuildingNavbar;
