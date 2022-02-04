import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import data from "../data/Data"
import Post from "../components/Post/Post"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        data.getPosts().then(posts => {
            setPosts(posts)
        })
    }, [])

    return <div className="page">
        <Row>
            {
                posts.length > 0 ?
                    <Col xs={12}>
                        <h2 className="mb-3">Posts</h2>
                    </Col>
                    : null
            }
            {
                posts.length > 0 ?
                    posts.map(post => {
                        return <Col xs={12} className="mb-3">
                            <a href={"/post/" + post.id} className="link-no-style"><Post data={post} /></a>
                        </Col>
                    }) :
                    <p>No posts yet, go ahead and create one!</p>
            }
        </Row>
    </div>
}

export default Home