import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Home from "../pages/Home"
import NavBar from "./NavBar"
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
                    {/* TODO: Change the page according to the current route, will be implemented during a future sprint */}
                    <Home />
                </Col>
            </Row>
        </Container>
    </div>
}

export default Main