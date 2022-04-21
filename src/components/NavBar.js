import { Navbar, Nav, Form, NavDropdown } from 'react-bootstrap';
import { mdiBellOutline } from '@mdi/js';
import Image from 'react-bootstrap/Image'
import { React, useEffect, useState } from 'react';
import LineSeparator from './LineSeparator';
import CreatePostModal from './CreatePostModal';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import UserNav from './UserNav';
import logo from "../assets/logo_wide.png"
import Icon from '@mdi/react';
import { isLoggedIn, logOutUser } from '../utils/SessionUtils';
import Notifications from './modals/Notifications/Notifications';

const NavBar = () => {
    useEffect(() => {
        if(!isLoggedIn()) {
            window.location.href = '/login'
        }
    }, [])

    const navigate = useNavigate();

    const [showNotifications, setShowNotifications] = useState(false)
    
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
    };
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
            <CreatePostModal show={show} handleShow={handleShow} handleClose={handleClose} />
        )
    }

    const renderNotificationsModal = ()=>{
        return (
            <Notifications show={showNotifications} onHide={setShowNotifications} />
        )
    }

    const profile = ()=>{
        return (
            <Nav.Link href="">
                <UserNav />
            </Nav.Link>
        )
    }

    return (
        <div>
            {show ? returnModal() : ""}
            {showNotifications ? renderNotificationsModal() : null}
            <Navbar className="ps-3 pe-3 topbar" collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/"><Image src={logo} height={30} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Form.Group className='me-auto mt-3 ms-4'>
                        <Form.Control type='text' placeholder='Search' onClick={() => window.location.pathname = '/posts/search'}/>
                    </Form.Group>
                    <Nav className="ms-auto align-items-center">
                        <NavDropdown title={profile()} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={(e)=>handleSettingsClick(e)}>Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={(e)=>handleLogoutClick(e)}>Logout</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link href="" className="text-uppercase" id="createModal" onClick={(e)=>handleCreateClick(e)}><strong className='primarytextcolor'>Create</strong></Nav.Link>
                        <Nav.Link>
                            <LineSeparator />
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="">
                            <Icon path={mdiBellOutline} size={1} color="gray" onClick={() => setShowNotifications(true)}/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar