import Icon from "@mdi/react"
import Colors from '../../theme/colors'

const SettingsSideBarItem = ({ icon, name, active, pcolor, handleClick }) => {
    const highlightColor = active ? Colors.accent : Colors.text.secondary
    const backgroundColor = active ? Colors.background.base : "transparent"

    return <div className="p-3" onClick={handleClick} style={{backgroundColor: backgroundColor}}>
            <Icon path={icon} size={1} color={pcolor} />
            {'   '}
            <b style={{ color: pcolor}}>{name}</b>
        </div>
}

export default SettingsSideBarItem