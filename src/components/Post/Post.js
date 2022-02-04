import { Card, Col, Row } from "react-bootstrap"
import { getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"

const Post = ({ data }) => {
    return <Card body>
        <h4>{data.title}</h4>
        <small>
            <Row>
                <Col xs="auto">
                    <p>Posted by</p>
                </Col>
                <Col xs="auto" className="m-0 p-0">
                    <UserMini firstName={data.user.firstName} lastName={data.user.lastName} avatar={data.user.avatar} />
                </Col>
                <Col>
                    on {getHumanReadableTimestamp(data.timestamp)}
                </Col>
            </Row>
        </small>
        <p>{data.desc}</p>
        <p><small><span>{data.participants.length} participants</span> • <span>{data.comments.length} comments</span></small></p>
    </Card>
}

export default Post