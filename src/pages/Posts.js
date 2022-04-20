import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar/SideBar"
import Post from "../components/Post/Post"
import Data from "../data/Data"
import { getCurrentUser } from "../utils/SessionUtils"

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Data.getPosts().then(posts => {
            setPosts(posts.data)
        })
    }, [])

    return <div className="page-container">
        <NavBar />
        <Row className="page">
            <Col md={3} lg={3} xl={2}>
                <SideBar selected='/posts' />
            </Col>
            <Col className="p-4 m-0 page-content">
                <Row>
                    {
                        posts.length > 0 ?
                            posts.map(post => {
                                return <Col xs={12}className="mb-3" key={post.ID}>
                                    <Post data={post} />
                                </Col>
                            }) :
                            <p>No posts yet, go ahead and create one!</p>
                    }
                </Row>
            </Col>
        </Row>
    </div>
}

export default Posts