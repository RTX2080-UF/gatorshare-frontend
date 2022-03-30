import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Home from "../../pages/Home"
import NavBar from "./../NavBar"
import SettingsSideBar from "./SettingsSideBar"
import Data from "../../data/Data"
import Profile from "./Profile"
import { setUser } from "../../utils/SessionUtils"
import {PATH} from "./SettingsPath";

const Settings = () => {
    const [item, setItem] = useState(PATH.PROFILE);
    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])

    return <div className="main-page">
        <NavBar />
        <Row className="main-container">
            <Col md={3} lg={3} xl={2}>
                <SettingsSideBar setSettingsPath={(e)=>setItem(e)}/>
            </Col>
            
            <Col className="page-container">
                {item === PATH.PROFILE ? <Profile/> : ""} 
                {item === PATH.SECURITY ? "Security" : ""} 
                {item === PATH.NOTIFICATIONS ? "Notifications" : ""} 
            </Col>
        </Row>
    </div>
}

export default Settings