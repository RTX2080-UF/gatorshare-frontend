import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import Post from "../components/Post/Post"
import SideBar from "../components/SideBar/SideBar"
import Data from "../data/Data"
import { isLoggedIn } from "../utils/SessionUtils"

const Home = () => {

    const [latestPosts, setLatestPosts] = useState([])

    useEffect(() => {
        if (!isLoggedIn()) {
            window.location.href = '/login'
        } else {
            Data.getLatestPosts().then(posts => {
                setLatestPosts(posts.data)
            }).catch(e => setLatestPosts([]))
        }
    }, [])

    return <div className="page-container">
        <NavBar />
        <Row className="page">
            <Col md={3} lg={3} xl={2}>
                <SideBar selected='/' />
            </Col>
            <Col className="p-4 m-0 page-content">
                <h4 className="mt-4 mb-3">Latest Posts</h4>
                {
                    latestPosts.map(post => {
                        return <Post data={post} />
                    })
                }
            </Col>
        </Row>
    </div>
}

export default Home