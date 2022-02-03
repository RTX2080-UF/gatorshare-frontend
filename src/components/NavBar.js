import { Navbar, Nav, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import React from 'react'
import LineSeparator from './LineSeparator';
import {
    BrowserRouter as Router
} from "react-router-dom";

import "./NavBar.css";
import dp from "../images/pp.jfif"
import UserNav from './UserNav';
import data from '../data/Data';

const NavBar = () => {
    const dummyUser = data.getDummyUser
    return (
        <Router>
            <Navbar className="ps-3 pe-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">GatorShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#deets">
                            <UserNav firstName={dummyUser.firstName} lastName={dummyUser.lastName} avatar={dummyUser.avatar}/>
                        </Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link className="text-center" href="#deets">Your posts</Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link href="#deets" className="text-uppercase"><strong className='primarycolor'>Create</strong></Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
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