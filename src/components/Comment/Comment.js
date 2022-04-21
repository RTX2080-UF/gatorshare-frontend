
import { Card, Col, Row } from "react-bootstrap"
import { getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"

const Comment = ({ comment, replyCallback, isChild }) => {

    const className = isChild ? 'ms-5 mb-3' : 'mb-3'

    return <Card body className={className}>
        <Row>
            <Col xs="auto" className="pe-0">
                <UserMini user={comment.User} />
            </Col>
            <Col className="m-0 p-0 ps-1">
                <p className="m-0 p-0"><small>{'on ' + getHumanReadableTimestamp(comment.CreatedAt) + ' said...'}</small></p>
            </Col>
            {
                !isChild ? <Col xs={"auto"} className="ms-auto">
                    <p className="m-0 p-0 text-color-accent" onClick={() => replyCallback(comment)}><b>REPLY</b></p>
                </Col> : null
            }
            <Col xs={12} className="pt-2">
                <p className="m-0 p-0">{comment.message}</p>
            </Col>
        </Row>
    </Card>
}

export default Comment