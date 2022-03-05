import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import NavBar from "./NavBar"
import PostDetails from "./Post/PostDetails"
import SideBar from "./SideBar/SideBar"
import Data from "../data/Data"
import { setUser } from "../utils/SessionUtils"

// const Main = () => {
//     return <div className="main-page">
//         <NavBar />
//         <Login className="main-container"/>
//     </div>
// }
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
                {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="post">
                        <Route path=":postId" element={<PostDetails />} />
                    </Route>
                </Routes>
                {/* </BrowserR  outer> */}
            </Col>
        </Row>
    </div>
}

export default Main