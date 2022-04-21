import { mdiBellRing } from "@mdi/js"
import Icon from "@mdi/react"
import { useEffect, useState } from "react"
import { Col, ListGroup, Modal, Row } from "react-bootstrap"
import Data from '../../../data/Data'

const Notifications = (props) => {

    const [notifications, setNotifications] = useState([])

    useEffect(() => {
        Data.getNotifications().then(notifications => {
            const notifs = notifications.data
            notifs.reverse()
            setNotifications(notifs)
        }).catch(e => {
            console.log('Error getting notifications', e)
            window.alert('Error fetching notifications, please try again later')
            props.onHide(false)
        })
    }, [props])

    return <Modal size="lg" centered show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
            <h4 className="mt-auto mb-auto ms-2">{notifications.length > 0 ? notifications.length : 'No'} Notifications</h4>
        </Modal.Header>
        <Modal.Body className="notification-space">
            {
                notifications.length > 0
                    ? <ListGroup variant="flush" className="p-0 m-0">
                        {notifications.map(notif => <ListGroup.Item>
                            <Row>
                                <Col xs={"auto"} className="my-auto">
                                    <Icon path={mdiBellRing} size={1} color="gray" className="mt-auto"/>
                                </Col>
                                <Col>
                                    <p className="m-0"><small>{new Date(notif.CreatedAt).toLocaleString()}</small></p>
                                    <p className="m-0">{notif.description}</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>)}
                    </ListGroup>
                    : <p>No new notifications to display!</p>
            }

        </Modal.Body>
    </Modal>
}

export default Notifications