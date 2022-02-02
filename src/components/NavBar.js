import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react'
import LineSeparator from './LineSeparator';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">GatorShare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <LineSeparator/>
                            <Nav.Link href="#deets">Your posts</Nav.Link>
                            <LineSeparator/>
                            <Nav.Link href="#deets">Create</Nav.Link>
                            <LineSeparator/>
                            <Nav.Link eventKey={2} href="#memes">
                                Notifications
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* <Routes>
                <Route path="/" element={<Things thingsList={things} />} />
                <Route exact path="/services" element={<Services lstThings={things} />} />
                <Route exact path="/relations" element={<Relationships servicesList={things} />} />
                <Route exact path="/recipe" element={<Recipe servicesList={things} />} />
                <Route exact path="/apps" element={<Apps servicesList={things} />} />
            </Routes> */}
        </Router>
    )
}

export default NavBar