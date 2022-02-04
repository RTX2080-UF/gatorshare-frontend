import { Card, Col, Row } from "react-bootstrap"
import { getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"

const Comment = ({ comment }) => {
    return <Card body className="mb-3">
        <Row>
            <Col xs="auto" className="pe-0">
                <UserMini firstName={comment.user.firstName} lastName={comment.user.lastName} avatar={comment.user.avatar} />
            </Col>
            <Col className="m-0 p-0 ps-1">
                <p className="m-0 p-0"><small>{'on ' + getHumanReadableTimestamp(comment.timestamp) + ' said...'}</small></p>
            </Col>
            <Col xs={12} className="pt-2">
                <p className="m-0 p-0">{comment.message}</p>
            </Col>
        </Row>
    </Card>
}

export default Comment