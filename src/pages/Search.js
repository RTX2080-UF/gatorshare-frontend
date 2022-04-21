import { mdiArrowLeft } from "@mdi/js"
import Icon from "@mdi/react"
import { useState } from "react"
import { Button, Col, Form, Navbar, Row } from "react-bootstrap"
import emptySearchIcon from '../assets/search-splash.png'
import Data from '../data/Data'
import Post from '../components/Post/Post'

import COLORS from '../theme/colors'

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('')
    const [posts, setPosts] = useState([])

    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value)
    }
    
    const search = () => {
        const tags = searchQuery.trim().split(" ")
        const body = JSON.stringify({tags: tags})
        Data.search(body).then(response => {
            setPosts(response.data)
        }).catch(e => window.alert('An error occurred. Please try again!'))
    }

    const pageStyle = {
        backgroundColor: COLORS.background.base,
    }

    return <div className="page-container p-0 m-0">
        <Navbar className="topbar">
            <Navbar.Brand>
                <a href="/"><Icon path={mdiArrowLeft} size={1} color="gray" className="m-3" /></a>
            </Navbar.Brand>

            <Form.Group className='mt-3 ms-4'>
                <Form.Control type='text' placeholder='Search' autoFocus onChange={handleSearchQueryChange} />
            </Form.Group>

            <Button className="me-auto ms-3 gatorshare-button" onClick={() => search()}>Search</Button>
        </Navbar>

        <Row className='page m-0 p-0' style={pageStyle}>
            {
                posts.length === 0 ?
                    <Col xs={12} md={{ span: 4, offset: 4 }} className='text-center p-5 mt-auto mb-auto'>
                        <img alt='An icon with magnifying glass and some documents' src={emptySearchIcon} width='25%' />
                        <h4 className="mt-4">Search for Something</h4>
                        <p>Posts that match your search query will appear here.</p>
                    </Col> :
                    <Col xs={12} className="pt-3 search-container">
                        {
                            posts.map(post => {
                                return <Post data={post} key={post.ID}/>
                            })
                        }
                    </Col>
            }
        </Row>

        {/* <SearchFilter
            show={showFilterModal}
            onSelect={onSelectFilters}
            onClose={() => setShowFilterModal(false)} /> */}

    </div>
}

export default Search