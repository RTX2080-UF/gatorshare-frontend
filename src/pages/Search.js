import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"
import { Col, Button, Form, Nav, Navbar, Row } from "react-bootstrap"
import COLORS from "../theme/colors"

const Search = () => {

    const style = {
        backgroundColor: COLORS.background.sidebar,
        height: '100%'
    }

    const topBarStyle = {
        backgroundColor: COLORS.background.base,
        height: '72px'
    }

    return <div className="page p-0 m-0">
        <Navbar>
            <Navbar.Brand>
                <a href="/"><Icon path={mdiArrowLeft} size={1} color="gray" className="m-3" /></a>
            </Navbar.Brand>

            <Form.Group className='me-auto mt-3 ms-4'>
                <Form.Control type='text' placeholder='Search' autoFocus/>
            </Form.Group>

            <Nav className="ms-auto">
                <Button variant="warning" className="me-3 gatorshare-button">Filter</Button>
                <Button variant="warning" className="me-3 gatorshare-button">Sort</Button>
            </Nav>
        </Navbar>
        

        <Row className='main-container m-0 p-0'>
            <Col xs={12} md={8} lg={}>

            </Col>
        </Row>
    </div>
}

export default Search