import React, { useEffect, useState } from "react"
import { Col, Row, Button } from "react-bootstrap"
import NavBar from "./../NavBar"
import SettingsSideBar from "./SettingsSideBar"
import Data from "../../data/Data"
import Profile from "./Profile"
import Security from "./Security"
import Notifications from "./Notifications"
import {PATH} from "./SettingsPath";

const Settings = () => {
    const [item, setItem] = useState(PATH.PROFILE);
    const [userData, setUserData] = useState("");
    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUserData(user)
        })
    }, [])

    return <div className="main-page">
        <NavBar />
        <Row className="main-container">
            <Col md={3} lg={3} xl={2} className="pe-0">
                <SettingsSideBar setSettingsPath={(e)=>setItem(e)}/>
            </Col>
            
            <Col className="page-container ps-0">
                {item === PATH.PROFILE ? <Profile userData={userData}/> : ""} 
                {item === PATH.SECURITY ? <Security/> : ""} 
                {item === PATH.NOTIFICATIONS ? <Notifications/> : ""}
            </Col>
        </Row>
    </div>
}

export default Settings