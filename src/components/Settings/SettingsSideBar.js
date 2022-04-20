import { mdiAccountCogOutline } from '@mdi/js';
import { mdiShieldAccountOutline } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import React, { useState } from "react"
import { Col, Row, Button } from 'react-bootstrap';
import COLORS from '../../theme/colors';
import SettingsSideBarItem from './SettingsSideBarItem';
import {PATH} from "./SettingsPath";
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../utils/SessionUtils';
import Colors from '../../theme/colors'

const SettingsSideBar = (props) => {
    const navigate = useNavigate();
    const [pColor, setPColor] = useState(Colors.accent);
    const [sColor, setSColor] = useState(Colors.text.secondary);
    const [nColor, setNColor] = useState(Colors.text.secondary);
    const handleProfileClick = (e)=> {
        setPColor(Colors.accent);
        setSColor(Colors.text.secondary);
        setNColor(Colors.text.secondary);
        props.setSettingsPath(PATH.PROFILE);
    }
    const handleSecurityClick = (e)=> {
        setSColor(Colors.accent);
        setPColor(Colors.text.secondary);
        setNColor(Colors.text.secondary);
        props.setSettingsPath(PATH.SECURITY);
    }
    const handleNotificationsClick = (e)=> {
        setNColor(Colors.accent);
        setSColor(Colors.text.secondary);
        setPColor(Colors.text.secondary);
        props.setSettingsPath(PATH.NOTIFICATIONS);
    }
    const handleLogoutClick = (e)=> {
        logOutUser();
        navigate("/login");
    }

    const style = {
        backgroundColor: COLORS.background.sidebar,
        width: '100%',
        height: '100%'
    }
    return <div style={style} className={"m-0 p-0 pt-5"}>
            <Row className={"m-0 p-0 pt-5"}>
                <Col xs={12} className={"m-0 p-0"} id="profile" key="Profile">
                    <SettingsSideBarItem name="Profile" icon={mdiAccountCogOutline} active pcolor={pColor} handleClick={(e)=>handleProfileClick(e)}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} id="security" key="Security">
                    <SettingsSideBarItem name="Security" icon={mdiShieldAccountOutline} active pcolor={sColor} handleClick={(e)=>handleSecurityClick(e)}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} id="notifications" key="Notifications">
                    <SettingsSideBarItem name="Notifications" icon={mdiBellOutline} active pcolor={nColor} handleClick={(e)=>handleNotificationsClick(e)}/>
                </Col>
            </Row>
            <div className='text-align-center logout-div'>
                <Button variant="outline-dark" className='settings-logout' id="logoutBtn" style={{ color: Colors.accent}} onClick={(e)=>handleLogoutClick(e)}>Logout</Button>
            </div>
    </div>
}

export default SettingsSideBar