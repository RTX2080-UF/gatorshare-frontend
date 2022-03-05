import { Image } from "react-bootstrap"
import avatarPlaceholder from '../assets/avatar_placeholder.png'

const UserMini = ({firstName, lastName, avatar}) => {
    return <div className="user-mini">
        <Image className="avatar" roundedCircle width={24} src={avatar === '' ? avatarPlaceholder : avatar}/>
        {'   '}
        <b>{firstName + ' ' + lastName}</b>
    </div>
} 

export default UserMini