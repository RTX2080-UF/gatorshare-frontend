import Icon from "@mdi/react"
import Colors from '../../theme/colors'

const SettingsSideBarItem = ({ icon, name, active, handleClick }) => {
    const highlightColor = active ? Colors.accent : Colors.text.secondary
    const backgroundColor = active ? Colors.background.base : "transparent"

    return <a className="link-no-style" onClick={handleClick}>
        <div className="p-3" style={{backgroundColor: backgroundColor}}>
            <Icon path={icon} size={1} color={highlightColor} />
            {'   '}
            <b style={{ color: highlightColor}}>{name}</b>
        </div>
    </a>
}

export default SettingsSideBarItem