import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Home from "../pages/Home"
import NavBar from "./NavBar"
import SideBar from "./SideBar/SideBar"
import Data from "../data/Data"
import { setUser } from "../utils/SessionUtils"

const Main = () => {

    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])

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