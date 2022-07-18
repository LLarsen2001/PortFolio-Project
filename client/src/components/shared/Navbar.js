import { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

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
    const renderNavItems = () => {
        if (user) {
            return (
                <>

                    <MyLink url='/account' >Account</MyLink>

                    <MyLink url="/profile">Profile</MyLink>

                    <MyLink url="/jobs">Jobs</MyLink>
                    <MyLink url="/addjob">Add New Job</MyLink>

                    <MyLink url="/jobsboard">Jobs Board</MyLink>
                    <MyLink url="/search">Search</MyLink>


                    <MyLink url="/demo">React-DnD-Demo</MyLink>

                    <MyLink url="/demo2">React-Beautiful DnD Demo</MyLink>
                    <Nav.Link as={"li"} onClick={logout}>Logout</Nav.Link>

                </>


            );
        } else {
            return (
                <>



                    <MyLink url="/login">Login</MyLink>


                    <MyLink url="/signup">Sign Up</MyLink>





                </>
            );
        }
    };
    return (

        <>
            <Navbar bg="light" variant="light">

                <LinkContainer to="/">
                    <Navbar.Brand href="/home">JobSeek</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">

                    {renderNavItems()}
                </Nav>

            </Navbar>

        </>
    );
};

export default BuildingNavbar;
