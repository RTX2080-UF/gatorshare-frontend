import React from "react"
import { Col, Row } from "react-bootstrap"
import Home from "../pages/Home"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Main = () => {
    return <div className="main-page">
        <NavBar />
        <Row>
            <Col md={3} lg={3} xl={2}>
                <SideBar />
            </Col>
            <Col className="page-container">
                {/* TODO: Change the page according to the current route, will be implemented during a future sprint */}
                <Home />
            </Col>
        </Row>
    </div>
}

export default Main