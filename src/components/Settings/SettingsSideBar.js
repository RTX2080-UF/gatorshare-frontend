import { mdiHomeOutline } from '@mdi/js';
import React, { useState } from "react"
import { Col, Row } from 'react-bootstrap';
import COLORS from '../../theme/colors';
import SettingsSideBarItem from './SettingsSideBarItem';
import {PATH} from "./SettingsPath";

const SettingsSideBar = (props) => {
    const [pactive, setpActive] = useState(true);
    const [sactive, setsActive] = useState(false);
    const [nactive, setnActive] = useState(false);

    const handleProfileClick = (e)=> {
        props.setSettingsPath(PATH.PROFILE);
        setpActive(true);
        setsActive(false);
        setnActive(false);
    }
    const handleSecurityClick = (e)=> {
        props.setSettingsPath(PATH.SECURITY);
        setpActive(false);
        setsActive(true);
        setnActive(false);
    }
    const handleNotificationsClick = (e)=> {
        props.setSettingsPath(PATH.NOTIFICATIONS);
        setpActive(false);
        setsActive(false);
        setnActive(true);
    }
    const SIDEBAR_ITEMS = [
        {
            icon: mdiHomeOutline,
            name: 'Profile',
            link: '/'
        },
        {
            icon: mdiHomeOutline,
            name: 'Security',
            link: '/'
        },
        {
            icon: mdiHomeOutline,
            name: 'Notifications',
            link: '/'
        }
    ]

    const style = {
        backgroundColor: COLORS.background.sidebar,
        width: '100%',
        height: '100%'
    }
    return <div style={style} className={"m-0 p-0 pt-5"}>
            <Row className={"m-0 p-0 pt-5"}>
                <Col xs={12} className={"m-0 p-0"} key="Profile">
                    <SettingsSideBarItem name="Profile" icon={mdiHomeOutline} active handleClick={(e)=>handleProfileClick(e)}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} key="Security">
                    <SettingsSideBarItem name="Security" icon={mdiHomeOutline} active handleClick={(e)=>handleSecurityClick(e)}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} key="Notifications">
                    <SettingsSideBarItem name="Notifications" icon={mdiHomeOutline} active handleClick={(e)=>handleNotificationsClick(e)}/>
                </Col>
            </Row>
    </div>
}

export default SettingsSideBar