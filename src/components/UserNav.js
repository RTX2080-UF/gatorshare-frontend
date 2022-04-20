import { Image } from "react-bootstrap"
import { getCurrentUser } from "../utils/SessionUtils"
import { getGravatar } from "../utils/Utils"

const UserNav = () => {
    const user = getCurrentUser()

    return user ? <div className="user-nav">
        <Image className="avatar" roundedCircle width={30} src={getGravatar(user.Email)}/>
        {'   '}
        <b>{user.firstName + ' ' + user.lastName}</b>
    </div> : null
} 

export default UserNav