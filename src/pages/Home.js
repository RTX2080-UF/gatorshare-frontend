import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import Post from "../components/Post/Post"
import PostMini from "../components/Post/PostMini"
import SideBar from "../components/SideBar/SideBar"
import Data from "../data/Data"
import { isLoggedIn } from "../utils/SessionUtils"

const Home = () => {

    const [forYouPosts, setForYouPosts] = useState([])
    const [latestPosts, setLatestPosts] = useState([])

    useEffect(() => {
        if (!isLoggedIn()) {
            window.location.href = '/login'
        } else {
            Data.getForYouPosts().then(posts => {
                setForYouPosts(posts.data)
            }).catch(e => setForYouPosts(null))

            Data.getLatestPosts().then(posts => {
                setLatestPosts(posts.data)
            }).catch(e => setLatestPosts(null))
        }
    }, [])

    return <div className="page-container">
        <NavBar />
        <Row className="page">
            <Col md={3} lg={3} xl={2}>
                <SideBar selected='/' />
            </Col>
            <Col className="p-4 m-0 page-content">
                <Row>
                    <Col sm={12} md={6}>
                        <h4 className="mt-4 mb-3">For You</h4>
                        {
                            forYouPosts.map(post => {
                                return <Post data={post} />
                            })
                        }
                    </Col>
                    <Col sm={12} md={6}>
                    <h4 className="mt-4 mb-3">Latest</h4>
                    {
                        latestPosts.map(post => {
                            return <Post data={post} />
                        })
                    }
                    </Col>
                    
                </Row>
            </Col>
        </Row>
    </div>
}

export default Home