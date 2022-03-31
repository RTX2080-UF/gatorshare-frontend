import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { mdiBellOutline } from '@mdi/js';
import Image from 'react-bootstrap/Image'
import { React, useState } from 'react';
import LineSeparator from './LineSeparator';
import CreatePostModal from './CreatePostModal';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import { useEffect } from "react"
import UserNav from './UserNav';
import logo from "../assets/logo_wide.png"
import Icon from '@mdi/react';
import { getCurrentUser, logOutUser } from '../utils/SessionUtils';

const NavBar = () => {
    const navigate = useNavigate();
    let currentUser = getCurrentUser()
    useEffect(() => {
        currentUser = getCurrentUser()
    }, [])
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleCreateClick = (e)=> {
        handleShow()
    }
    const handleSettingsClick = (e)=> {
        navigate("/settings");
    }
    const handleLogoutClick = (e)=> {
        logOutUser();
        navigate("/login");
    }
    const returnModal = ()=>{
        return (
            <CreatePostModal show={show} handleShow={handleShow} handleClose={handleClose}></CreatePostModal>
        )
    }
    const test = ()=>{
        return (
            <Nav.Link href="#deets">
                <UserNav firstName={currentUser.firstName} lastName={currentUser.lastName} avatar={currentUser.avatar}/>
            </Nav.Link>
        )
    }
    return (
        <div>
            {show ? returnModal() : ""}
            <Navbar className="ps-3 pe-3" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/"><Image src={logo} height={30} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavDropdown title={test()} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={(e)=>handleSettingsClick(e)}>Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={(e)=>handleLogoutClick(e)}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link className="text-center" href="#deets">Your posts</Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link href="#deets" className="text-uppercase" onClick={(e)=>handleCreateClick(e)}><strong className='primarytextcolor'>Create</strong></Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Icon path={mdiBellOutline} size={1} color="gray"/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar