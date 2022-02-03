import { Image } from "react-bootstrap"

const UserNav = ({firstName, lastName, avatar}) => {
    return <div className="user-nav">
        <Image roundedCircle width={30} src={avatar}/>
        {'   '}
        <b>{firstName + ' ' + lastName}</b>
    </div>
} 

export default UserNav