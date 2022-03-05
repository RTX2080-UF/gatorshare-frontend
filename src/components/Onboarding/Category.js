import { useState } from "react"
import { Card, Col, Image, Row } from "react-bootstrap"

const Category = ({data}) => {
    const [selected, setSelected] = useState(false)

    return <Card className="p-3">
        <Row>
            <Col sm="auto">
                <Image width={24} height={24} src={data.icon}/>
            </Col>
            <Col>
                <h5 className="p-0 m-0">{data.name}</h5>
            </Col>
        </Row>
    </Card>
}

export default Category