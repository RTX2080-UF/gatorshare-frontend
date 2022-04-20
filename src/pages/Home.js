import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import PostMini from "../components/Post/PostMini"
import SideBar from "../components/SideBar/SideBar"
import Data from "../data/Data"
import { isLoggedIn } from "../utils/SessionUtils"

const Home = () => {

    const [popularPosts, setPopularPosts] = useState([])
    const [nearbyPosts, setNearbyPosts] = useState([])
    const [followedPosts, setFollowedPosts] = useState([])

    useEffect(() => {
        // const params = new URLSearchParams(window.location.search)
        
        if (!isLoggedIn()) {
            window.location.href = '/login'
        } else {
            Data.getPosts(1).then(posts => {
                setPopularPosts(posts.data)
                setNearbyPosts(posts.data)
                setFollowedPosts(posts.data)
            }).catch(e => {
                console.log("error in getposts")
            })
        }
    }, [])

    return <div className="page-container">
        <NavBar />
        <Row className="page">
            <Col md={3} lg={3} xl={2}>
                <SideBar selected='/' />
            </Col>
            <Col className="p-4 m-0">
                <Row>
                    <Col sm={12}>
                        <h4 className="mt-4 mb-3">Popular</h4>
                    </Col>
                    {
                        popularPosts.map(post => {
                            return <Col sm={12} md={2} lg={4} key={post.ID}>
                                <PostMini data={post} />
                            </Col>
                        })
                    }
                    <Col sm={12}>
                        <h4 className="mt-4 mb-3">Nearby</h4>
                    </Col>
                    {
                        nearbyPosts.map(post => {
                            return <Col sm={12} md={2} lg={4} key={post.ID}>
                                <PostMini data={post} />
                            </Col>
                        })
                    }
                    <Col sm={12}>
                        <h4 className="mt-4 mb-3">From your followed categories</h4>
                    </Col>
                    {
                        followedPosts.map(post => {
                            return <Col sm={12} md={2} lg={4} key={post.ID}>
                                <PostMini data={post} />
                            </Col>
                        })
                    }
                </Row>
            </Col>
        </Row>
    </div>
}

export default Home