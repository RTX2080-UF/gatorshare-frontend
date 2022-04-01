import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"
import DataSource from "../../data/Data"

const PostMini = ({ data }) => {

    const postId = data.ID
    const user = data.User
    const participantCount = data.participantNum
    const postCreatedAt = data.CreatedAt
    const title = data.title

    const [commentCount, setCommentCount] = useState(0)

    useEffect(() => {
        DataSource.getCommentsOfPost(postId).then( comments => setCommentCount(comments.length))
    }, [postId])

    return <Card body className="mini-post">
        <small>{getHumanReadableTimestamp(postCreatedAt)}</small>
        <h5 className="mt-2">{title}</h5>
        <small>
            <UserMini firstName={user.firstName} lastName={user.lastName} avatar={user.avatar} />
        </small>
        <p className="mt-2"><small><span>{participantCount} participants</span> • <span>{commentCount} comments</span></small></p>
    </Card>
}

export default PostMini