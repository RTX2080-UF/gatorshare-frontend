import { Navbar, Nav } from 'react-bootstrap';
import { mdiBellOutline } from '@mdi/js';
import Image from 'react-bootstrap/Image'
import React from 'react'
import LineSeparator from './LineSeparator';
import {
    BrowserRouter as Router
} from "react-router-dom";

import "./NavBar.css";
import UserNav from './UserNav';
import data from '../data/Data';
import logo from "../assets/logo_wide.png"
import Icon from '@mdi/react';

const NavBar = () => {
    const currentUser = data.getCurrentUser()
    return (
        <Router>
            <Navbar className="ps-3 pe-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home"><Image src={logo} height={30} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#deets">
                            <UserNav firstName={currentUser.firstName} lastName={currentUser.lastName} avatar={currentUser.avatar}/>
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
                            <Icon path={mdiBellOutline} size={1} color="gray"/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Router>
    )
}

export default NavBar