import { Button, Col, Form, Row } from "react-bootstrap"
import { mdiArrowLeft, mdiDelete } from '@mdi/js'
import Icon from '@mdi/react'
import { getHumanReadableTimestamp } from "../../utils/Utils"
import UserMini from "../UserMini"
import { useEffect, useState } from "react"
import data from "../../data/Data"
import { Link, useParams } from "react-router-dom"
import Comment from "../Comment/Comment"
import { getCurrentUser } from "../../utils/SessionUtils"

const PostDetails = () => {

    const params = useParams()

    const postId = params.postId

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [interested, setInterested] = useState(false)

    const callReaction = () => {
        const body = JSON.stringify({ postId: parseInt(postId), reaction: 'INTERESTED' })
        setInterested(true)
        // data.reactToPost(body).then(response => {
        //     setInterested(true)
        // }).catch(e => window.alert('An error occurred. Please try again.'))
    }

    useEffect(() => {
        data.getPostById(postId).then(postData => {
            setPost(postData.data)
            console.log(postData.data)
        }).catch(error => {
            window.alert('Failed to fetch post details. Please try again later.')
            window.location.href = "/"
        })

        data.getCommentsOfPost(postId).then(commentsData => {
            setComments(mapComments(commentsData.data))
        }).catch(error => console.log(error))

    }, [postId])

    const [currentComment, setCurrentComment] = useState('')
    const [currentParentComment, setCurrentParentComment] = useState(null)

    const commentBeingTyped = (event) => {
        setCurrentComment(event.target.value)
    }

    const createComment = () => {
        const comment = JSON.stringify({
            postId: parseInt(postId),
            message: currentComment,
            parentId: currentParentComment ? currentParentComment?.ID : 0,
            votes: 0
        })
        data.createComment(comment).then(() => window.location.reload())
    }

    const replyCallback = (parentComment) => {
        setCurrentComment(`@${parentComment.User.userName} ${currentComment}`)
        setCurrentParentComment(parentComment)
    }

    const deletePost = () => {
        const confirmDelete = window.confirm('Are you sure you wish to delete this post? This action cannot be undone.')
        if (confirmDelete) {
            data.deletePost(parseInt(postId)).then(response => {
                window.alert('Post deleted.')
                window.location.href = '/'
            }).catch(e => {
                console.log('Error deleting post: ', e)
                window.alert('Failed to delete post. Please try again later.')
            })
        }
    }

    const mapComments = (comments) => {
        const newComments = []
        comments.forEach(comment => {
            if (comment.parentId === 0) {
                newComments.push(comment)
            }
            comments.forEach(child => {
                if (comment.ID !== child.ID && child.parentId === comment.ID) {
                    newComments.push(child)
                }
            })
        })

        return newComments
    }

    return post ? <div className="page-container p-4">
        <Row>
            <Col>
                <Link to="/"><Icon path={mdiArrowLeft} size={1} color="gray" /></Link>
            </Col>
            <Col xs="auto">
                {getCurrentUser().ID === post.User.ID ? <Icon path={mdiDelete} size={1} color="orange" onClick={() => deletePost()} /> : null}
            </Col>

        </Row>
        <Row className="mt-4">
            <Col className="my-auto">
                <h2>{post?.title}</h2>
            </Col>
            <Col xs="auto" className="my-auto">
                <Button className="gatorshare-button" onClick={() => callReaction()}>
                    { interested ? 'Interested' : 'Mark as Interested'}
                </Button>
            </Col>
        </Row>
        <Row>
            <Col xs="auto">
                <p>Posted by</p>
            </Col>
            <Col xs="auto" className="m-0 p-0">
                <UserMini user={post?.User} />
            </Col>
            <Col>
                on {getHumanReadableTimestamp(post?.CreatedAt)}
            </Col>
        </Row>
        <p>{post?.description}</p>
        <hr />

        <h5 className="mb-3">Comments</h5>
        <Row>
            <Col>
                <Form.Control type="text" placeholder="Enter your comment here" value={currentComment} onChange={commentBeingTyped.bind(this)} />
            </Col>
            <Col xs="auto">
                <Button variant="warning" id="comment-post" className="gatorshare-button" onClick={() => createComment()}>Post</Button>
            </Col>
            {
                comments.length > 0 ? comments.map(comment => {
                    const isChild = comment.parentId !== 0

                    return <Col xs={12} key={comment.ID}>
                        <Comment comment={comment} replyCallback={replyCallback} isChild={isChild} />
                    </Col>
                }) : <p>Be the first one to comment!</p>
            }
        </Row>

    </div> : null
}

export default PostDetails