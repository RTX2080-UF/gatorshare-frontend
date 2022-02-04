import React from "react"
import { Col, Row } from "react-bootstrap"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import NavBar from "./NavBar"
import PostDetails from "./Post/PostDetails"
import SideBar from "./SideBar/SideBar"

const Main = () => {
    return <div className="main-page">
        <NavBar />
        <Row className="main-container">
            <Col md={3} lg={3} xl={2}>
                <SideBar />
            </Col>
            <Col className="page-container">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="post">
                            <Route path=":postId" element={<PostDetails />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                {/* <Route path="/" element={} /> */}
            </Col>
        </Row>
    </div>
}

export default Main