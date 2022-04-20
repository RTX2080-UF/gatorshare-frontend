import { useEffect, useState } from "react"
import { ListGroup, Modal } from "react-bootstrap"
import Data from '../../../data/Data'

const Notifications = (props) => {

    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        Data.getNotifications().then(notifications => {
            setNotifications(notifications.data)
        }).catch(e => {
            console.log('Error getting notifications', e)
            window.alert('Error fetching notifications, please try again later')
            props.onHide(false)
        })
    }, [])

    return <Modal size="lg" centered show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <h4 className="mt-auto mb-auto ms-2">Notifications</h4>
        </Modal.Header>
        <Modal.Body className="p-4 notification-space">
            {
                notifications.length > 0
                    ? <ListGroup variant="flush">
                        {notifications.map(notif => <ListGroup.Item>{notif.name}</ListGroup.Item>)}
                    </ListGroup>
                    : <p>No new notifications to display!</p> 
                }

        </Modal.Body>
    </Modal>
}

export default Notifications