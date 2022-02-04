import Icon from "@mdi/react"
import Colors from '../../theme/colors'

const SideBarItem = ({ icon, name, active, link }) => {
    const highlightColor = active ? Colors.accent : Colors.text.secondary
    const backgroundColor = active ? Colors.background.base : "transparent"

    return <a href={link} className="link-no-style">
        <div className="p-3" style={{backgroundColor: backgroundColor}}>
            <Icon path={icon} size={1} color={highlightColor} />
            {'   '}
            <b style={{ color: highlightColor}}>{name}</b>
        </div>
    </a>
}

export default SideBarItem