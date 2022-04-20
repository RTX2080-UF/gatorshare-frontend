import { useEffect, useState } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { getGravatar, getHumanReadableTimestamp, getTimeToDate } from "../../utils/Utils"
import UserMini from "../UserMini"
import DataSource from "../../data/Data"

const Post = ({ data }) => {
    const postId = data.ID
    const user = data.User
    const participantCount = data.participantNum
    const postCreatedAt = data.CreatedAt
    const description = data.description
    const title = data.title
    const expires = data.Expiry

    const [commentCount, setCommentCount] = useState(0)

    useEffect(() => {
        DataSource.getCommentsOfPost(postId).then( comments => setCommentCount(comments.data.length))
    }, [postId])

    return <a href={"/post/" + postId} className="link-no-style"><Card body className="mb-3">
         <small><small className="text-danger">Expires in {getTimeToDate(expires)}</small></small>
        <h4 className="mt-2">{title}</h4>
        <small>
            <Row>
                <Col xs="auto">
                    <p>Posted by</p>
                </Col>
                <Col xs="auto" className="m-0 p-0">
                    <UserMini firstName={user.firstName} lastName={user.lastName} avatar={getGravatar(user.Email)} />
                </Col>
                <Col>
                    on {getHumanReadableTimestamp(postCreatedAt)}
                </Col>
            </Row>
        </small>
        <p>{description}</p>
        <p><small><span>{participantCount === 0 ? 'No' : participantCount} participants</span> • <span>{commentCount === 0 ? 'No' : commentCount} comments</span></small></p>
    </Card></a>
}

export default Post