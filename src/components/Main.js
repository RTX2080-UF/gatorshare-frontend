import { Col, Row } from "react-bootstrap"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

const Main = () => {
    return <div className="main-page">
        <NavBar />
        <Row>
            <Col md={3} lg={2}>
                <SideBar />
            </Col>
            <Col>
                {/* Add Homepage Here */}
            </Col>
        </Row>
    </div>
}

export default Main