import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import NavBar from "./NavBar"
import PostDetails from "./Post/PostDetails"
import SideBar from "./SideBar"

const Main = () => {
    return <div className="main-page">
        <NavBar />
        <Container className="main-container">
            <Row>
                <Col md={3} lg={3} xl={2}>
                    <SideBar />
                </Col>
                <Col className="page-container">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="post">
                                <Route path=":postId" element={<PostDetails/>} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                    {/* <Route path="/" element={} /> */}
                </Col>
            </Row>
        </Container>
    </div>
}

export default Main