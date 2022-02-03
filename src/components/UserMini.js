import { Image } from "react-bootstrap"

const UserMini = ({firstName, lastName, avatar}) => {
    return <div className="user-mini">
        <Image roundedCircle width={24} src={avatar}/>
        {'   '}
        <b>{firstName + ' ' + lastName}</b>
    </div>
} 

export default UserMini