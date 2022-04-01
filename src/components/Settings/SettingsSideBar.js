import { mdiAccountCogOutline } from '@mdi/js';
import { mdiShieldAccountOutline } from '@mdi/js';
import { mdiBellOutline } from '@mdi/js';
import React from "react"
import { Col, Row, Button } from 'react-bootstrap';
import COLORS from '../../theme/colors';
import SettingsSideBarItem from './SettingsSideBarItem';
import {PATH} from "./SettingsPath";
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../utils/SessionUtils';
import Colors from '../../theme/colors'

const SettingsSideBar = (props) => {
    const navigate = useNavigate();
    const handleProfileClick = (e)=> {
        props.setSettingsPath(PATH.PROFILE);
    }
    const handleSecurityClick = (e)=> {
        props.setSettingsPath(PATH.SECURITY);
    }
    const handleNotificationsClick = (e)=> {
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
                    <SettingsSideBarItem name="Profile" icon={mdiAccountCogOutline} active handleClick={(e)=>handleProfileClick(e)}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} id="security" key="Security">
                    <SettingsSideBarItem name="Security" icon={mdiShieldAccountOutline} active handleClick={(e)=>handleSecurityClick(e)}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} id="notifications" key="Notifications">
                    <SettingsSideBarItem name="Notifications" icon={mdiBellOutline} active handleClick={(e)=>handleNotificationsClick(e)}/>
                </Col>
            </Row>
            <div className='text-align-center logout-div'>
                <Button variant="outline-dark" className='settings-logout' id="logoutBtn" style={{ color: Colors.accent}} onClick={(e)=>handleLogoutClick(e)}>Logout</Button>
            </div>
    </div>
}

export default SettingsSideBar