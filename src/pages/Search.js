import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"
import { useState } from "react"
import { Col, Form, Nav, Navbar, Row } from "react-bootstrap"
import emptySearchIcon from '../assets/search-splash.png'

import COLORS from '../theme/colors'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value)
    }

    const pageStyle = {
        backgroundColor: COLORS.background.base,
    }

    return <div className="page-container p-0 m-0">
        <Navbar className="topbar">
            <Navbar.Brand>
                <a href="/"><Icon path={mdiArrowLeft} size={1} color="gray" className="m-3" /></a>
            </Navbar.Brand>

            <Form.Group className='me-auto mt-3 ms-4'>
                <Form.Control type='text' placeholder='Search' autoFocus onChange={handleSearchQueryChange} />
            </Form.Group>

            <Nav className="ms-auto mt-auto">
                <p className="me-4"><b>Filter</b> 0 applied</p>
                <p className="me-4"><b>Sort</b> by relevance</p>
            </Nav>
        </Navbar>

        <Row className='page m-0 p-0' style={pageStyle}>
            {
                searchQuery === '' ?
                    <Col xs={12} md={{span: 4, offset: 4}} className='text-center p-5 mt-auto mb-auto'>
                        <img alt='An icon with magnifying glass and some documents' src={emptySearchIcon} width='25%'/>
                        <h4 className="mt-4">Start Typing Something</h4>
                        <p>Posts that match your search query will appear here.</p>
                    </Col> :
                    <Col xs={12}>

                    </Col>
            }
        </Row>
    </div>
}

export default Search