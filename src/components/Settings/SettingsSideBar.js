import { mdiHomeOutline } from '@mdi/js';
import { Col, Row } from 'react-bootstrap';
import COLORS from '../../theme/colors';
import SideBarItem from '../SideBar/SideBarItem';

const SettingsSideBar = () => {
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
                    <SideBarItem name="Profile" icon={mdiHomeOutline} active/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} key="Security">
                    <SideBarItem name="Security" icon={mdiHomeOutline}/>
                </Col>
                <Col xs={12} className={"m-0 p-0"} key="Notifications">
                    <SideBarItem name="Notifications" icon={mdiHomeOutline}/>
                </Col>
            </Row>
    </div>
}

export default SettingsSideBar