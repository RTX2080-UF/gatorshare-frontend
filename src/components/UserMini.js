import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { getGravatar } from "../utils/Utils"

const UserMini = ({user}) => {
    const firstName = user.firstName
    const lastName = user.lastName
    const email = user.email

    const avatar = getGravatar(email)

    return <Link to={'/userProfile/' + user.ID} className='link-no-style'> <div className="user-mini">
        <Image className="avatar" roundedCircle width={24} src={avatar}/>
        {'   '}
        <b>{firstName + ' ' + lastName}</b>
    </div>
    </Link>
} 

export default UserMini