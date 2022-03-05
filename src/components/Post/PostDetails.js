import { Button, Col, Form, Row } from "react-bootstrap"
import { mdiArrowLeft } from '@mdi/js'
import Icon from '@mdi/react'
import { getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"
import { useEffect, useState } from "react"
import data from "../../data/Data"
import { Link, useParams } from "react-router-dom"
import Comment from "../Comment/Comment"
import { DEMO_DB } from "../../data/Demo"

const PostDetails = () => {

    const params = useParams()

    const postId = params.postId

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])

    useEffect(() => {
        data.getPostById(postId).then(postData => {
            setPost(postData.data)
        }).catch(error => {
            window.alert('Failed to fetch post details! \n' + error)
            window.location.href = "/"
        })

        data.getCommentsOfPost(postId).then(commentsData => {
            setComments(DEMO_DB.comments)
        })

    }, [postId])

    const [currentComment, setCurrentComment] = useState('')

    const commentBeingTyped = (event) => {
        setCurrentComment(event.target.value)
    }

    const createComment = () => {
        data.createComment({
            postId: postId,
            message: currentComment,
        }).then(comment => setComments([...comments, comment]))
    }

    return post ? <div className="page">
        <Link to="/"><Icon path={mdiArrowLeft} size={1} color="gray" /></Link>
        <h2 className="mt-4">{post?.title}</h2>
        <Row>
            <Col xs="auto">
                <p>Posted by</p>
            </Col>
            <Col xs="auto" className="m-0 p-0">
                <UserMini firstName={post?.User.firstName} lastName={post?.User.lastName} avatar={post?.User.avatar} />
            </Col>
            <Col>
                on {getHumanReadableTimestamp(post?.CreatedAt)}
            </Col>
        </Row>
        <p>{post?.description}</p>
        <hr />
        {/* <h5 className="mb-3">Participants</h5>
        <Row>
            {
                post?.participantsNum > 0 ? post.participants.map(participant => {
                    return <Col xs="auto" key={participant.id}>
                        <UserMini firstName={participant.firstName} lastName={participant.lastName} avatar={participant.avatar} />
                    </Col>
                }) : <p>No participants yet</p>
            }
        </Row>
        <hr /> */}
        <h5 className="mb-3">Comments</h5>
        <Row>
            <Col>
                <Form.Control type="text" placeholder="Enter your comment here" onChange={commentBeingTyped.bind(this)}/>
            </Col>
            <Col xs="auto">
                <Button variant="warning" id="comment-post" onClick={() => createComment()}>Post</Button>
            </Col>
            {
                comments.length > 0 ? comments.map(comment => {
                    return <Col xs={12} key={comment.id}>
                        <Comment comment={comment} />
                    </Col>
                }) : <p>Be the first one to comment!</p>
            }
        </Row>

    </div> : null
}

export default PostDetails