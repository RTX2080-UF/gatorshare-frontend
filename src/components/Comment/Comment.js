import { mdiHeart } from "@mdi/js"
import Icon from "@mdi/react"
import { Card, Col, Row } from "react-bootstrap"
import { getGravatar, getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"

const Comment = ({ comment, replyCallback }) => {
    return <Card body className="mb-3">
        <Row>
            <Col xs="auto" className="pe-0">
                <UserMini firstName={comment.User.firstName} lastName={comment.User.lastName} avatar={getGravatar(comment.User.Email)} />
            </Col>
            <Col className="m-0 p-0 ps-1">
                <p className="m-0 p-0"><small>{'on ' + getHumanReadableTimestamp(comment.CreatedAt) + ' said...'}</small></p>
            </Col>
            <Col xs={"auto"} className="ms-auto">
                <p className="m-0 p-0 text-color-accent" onClick={() => replyCallback(comment)}><b>REPLY</b></p>
            </Col>
            <Col xs={12} className="pt-2">
                <p className="m-0 p-0">{comment.message}</p>
            </Col>
            <Col className="pt-2">
                <p className="m-0 p-0"><Icon path={mdiHeart} size={0.7} className="me-1"/>{comment.votes}</p>
            </Col>
        </Row>
    </Card>
}

export default Comment