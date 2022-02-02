import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import React from 'react'
import LineSeparator from './LineSeparator';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import "./NavBar.css";
import dp from "../images/pp.jfif"

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
                        <Nav classname="align-items-center">
                            <Nav.Link href="#deets">
                                <div className="d-flex me-2 align-items-center" style={{flexDirection: "row"}}>
                                    <div className="left me-2 justify-content-center" >
                                        <Image className="profilepic" src={dp} roundedCircle></Image>
                                    </div>
                                    <div>
                                        <strong>Profile Name</strong>
                                        <p style={{marginBottom: "0"}}>View profile</p>
                                    </div>
                                </div>
                            </Nav.Link>
                            <Nav.Link>
                                <LineSeparator/>
                            </Nav.Link>
                            <Nav.Link className="text-center" href="#deets">Your posts</Nav.Link>
                            <Nav.Link>
                                <LineSeparator/>
                            </Nav.Link>
                            <Nav.Link href="#deets">Create</Nav.Link>
                            <Nav.Link>
                                <LineSeparator/>
                            </Nav.Link>
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