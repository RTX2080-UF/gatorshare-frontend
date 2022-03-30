import { Navbar, Nav, Form } from 'react-bootstrap';
import { useEffect } from "react";
import { mdiBellOutline } from '@mdi/js';
import Image from 'react-bootstrap/Image'
import { React, useState } from 'react';
import LineSeparator from './LineSeparator';
import CreatePostModal from './CreatePostModal';
import "./NavBar.css";
import UserNav from './UserNav';
import logo from "../assets/logo_wide.png"
import Icon from '@mdi/react';
import { getCurrentUser } from '../utils/SessionUtils';

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState("");
    useEffect(() => {
        setCurrentUser(getCurrentUser());
    }, [])
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleCreateClick = (e)=> {
        handleShow()
    }
    const returnModal = ()=>{
        return (
            <CreatePostModal show={show} handleShow={handleShow} handleClose={handleClose}></CreatePostModal>
        )
    }
    return (
        <div>
            {show ? returnModal() : ""}
            <Navbar className="ps-3 pe-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home"><Image src={logo} height={30} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form.Group className='me-auto mt-3 ms-4'>
                        <Form.Control type='text' placeholder='Search'/>
                    </Form.Group>
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="">
                            <UserNav firstName={currentUser.firstName} lastName={currentUser.lastName} avatar={currentUser.avatar}/>
                        </Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link className="text-center" href="">Your posts</Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link href="" className="text-uppercase" onClick={(e)=>handleCreateClick(e)}><strong className='primarytextcolor'>Create</strong></Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="">
                            <Icon path={mdiBellOutline} size={1} color="gray"/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar