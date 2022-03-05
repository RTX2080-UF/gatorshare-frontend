import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import data from "../data/Data"
import Post from "../components/Post/Post"

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        data.getPosts(1).then(posts => {
            console.log(posts)
            setPosts(posts.data)
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
                        return <Col xs={12} className="mb-3" key={post.ID}>
                            <a href={"/post/" + post.ID} className="link-no-style"><Post data={post} /></a>
                        </Col>
                    }) :
                    <p>No posts yet, go ahead and create one!</p>
            }
        </Row>
    </div>
}

export default Home