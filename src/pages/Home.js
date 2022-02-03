import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import data from "../data/Data"
import Post from "../components/Post"

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
                <h2 className="mb-3">Posts</h2>
            </Col>
        </Row>
        <Row>
            {posts.map(post => {
                return <Col xs={12} className="mb-3">
                    <Post data={post} />
                </Col>
            })}
        </Row>
    </div>
}

export default Home