import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import data from "../data/Data"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        data.getPosts.then(posts => {
            setPosts(posts)
        })
    }, [])

    return <div className="home-page">
        <Row>
            <Col xs={12}>
                <h4>Posts</h4>
            </Col>
        </Row>
        <Row>
            {posts.map(post => {
                // TODO: Add post component here.
                return <Col xs={12}></Col>
            })}
        </Row>
    </div>
}

export default Home