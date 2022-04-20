import { Col, Image, Row, Button } from "react-bootstrap"
import { mdiArrowLeft } from '@mdi/js'
import Icon from '@mdi/react'
import { getGravatar } from "../utils/Utils"
import { useEffect, useState } from "react"
import data from "../data/Data"
import { useParams } from "react-router-dom"

const UserProfile = () => {

    const params = useParams()
    const userId = params.userId

    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        data.getUserById(userId).then(user => {
            setUser(user.data)
            console.log(user.data)
        }).catch(error => {
            window.alert('Failed to fetch user details. Please try again later.')
            window.history.back()
        })
    }, [userId])

    return user ? <div className="page-container p-4">
        <Row>
            <Col>
                <Icon path={mdiArrowLeft} size={1} color="gray" onClick={() => window.history.back()} />
            </Col>
        </Row>
        <Row className="mt-5">
            <Col xs='auto' className="my-auto">
                <Image className="avatar" roundedCircle width={64} src={getGravatar(user.Email)}/>
            </Col>
            <Col>
                <h2>{user.firstName + ' ' + user.lastName}</h2>
                <p className="m-0 p-0">Member since {new Date(user.CreatedAt).toLocaleString()}</p>
            </Col>

            <Col xs='auto' className="my-auto">
                <Button className='gatorshare-button'>Follow</Button>
            </Col>
        </Row>
        <hr/>
    </div> : null
}

export default UserProfile