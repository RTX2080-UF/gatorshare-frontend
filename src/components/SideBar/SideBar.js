import { mdiHomeOutline } from '@mdi/js';
import { Col, Row } from 'react-bootstrap';
import COLORS from '../../theme/colors';
import SideBarItem from './SideBarItem';

const SideBar = () => {
    const SIDEBAR_ITEMS = [
        {
            icon: mdiHomeOutline,
            name: 'Home',
            link: '/'
        }
    ]

    const style = {
        backgroundColor: COLORS.background.sidebar,
        width: '100%',
        height: '100%'
    }

    return <Row style={style} className={"m-0 p-0 pt-5"}>
        {
            SIDEBAR_ITEMS.map(item => {
                return <Col xs={12} className={"m-0 p-0"}>
                    <SideBarItem name={item.name} icon={item.icon} active link={item.link}/>
                </Col>
            })
        }
    </Row>
}

export default SideBar