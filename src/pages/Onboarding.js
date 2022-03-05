import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Category from "../components/Onboarding/Category"
import Data from "../data/Data"

const Onboarding = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        Data.getAllCategories().then(categories => {
            setCategories(categories)
        })
    }, [])

    return <Row className="p-5">
        <Col sm={12}>
            <h3 className="pb-5">Welcome to GatorShare!</h3>
            <h5 className="pb-2">To get started, pick a few interests...</h5>
        </Col>
        {
            categories.map(category => {
                return <Col sm={12} md={4} lg={3}>
                    <Category data={category}/>
                </Col>
            })
        }
    </Row>
}

export default Onboarding