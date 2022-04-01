import { mdiHomeOutline, mdiNoteTextOutline } from '@mdi/js';
import COLORS from '../../theme/colors';
import SideBarItem from './SideBarItem';

const SideBar = ({selected}) => {
    const SIDEBAR_ITEMS = [
        {
            icon: mdiHomeOutline,
            name: 'Home',
            link: '/'
        },
        {
            icon: mdiNoteTextOutline,
            name: 'Posts',
            link: '/posts'
        }
    ]

    const style = {
        backgroundColor: COLORS.background.sidebar,
        width: '100%',
        height: '100%'
    }

    return <div style={style} className='pt-5'>
        {
            SIDEBAR_ITEMS.map(item => {
                return <SideBarItem name={item.name} icon={item.icon} active={item.link === selected} link={item.link} key={item.link}/>
            })
        }
    </div>
}

export default SideBar