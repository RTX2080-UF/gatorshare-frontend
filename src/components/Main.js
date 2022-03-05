import React from "react"
import { Col, Row } from "react-bootstrap"
import Home from "../pages/Home"
import NavBar from "./NavBar"
import SideBar from "./SideBar/SideBar"

const Main = () => {
    return <div className="main-page">
        <NavBar />
        <Row className="main-container">
            <Col md={3} lg={3} xl={2}>
                <SideBar />
            </Col>
            <Col className="page-container">
                <Home />
            </Col>
        </Row>
    </div>
}

export default Main