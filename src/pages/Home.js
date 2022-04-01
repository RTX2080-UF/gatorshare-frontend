import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar/SideBar"
import Post from "../components/Post/Post"
import Data from "../data/Data"

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Data.getPosts(1).then(posts => {
            setPosts(posts.data)
        }).catch(e => {
            console.log("error in getposts")
        })
    }, [])

    return <div className="page-container">
        <NavBar />
        <Row className="page">
            <Col md={3} lg={3} xl={2}>
                <SideBar selected='/'/>
            </Col>
            <Col className="p-4 m-0">
                <Row>
                    <Col sm={12}>
                        <h5>Popular</h5>
                    </Col>
                    <Col sm={12}>
                        <h5>Nearby</h5>
                    </Col>
                    <Col sm={12}>
                        <h5>From your followed categories</h5>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}

export default Home