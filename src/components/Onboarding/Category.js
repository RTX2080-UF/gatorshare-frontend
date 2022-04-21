import { Card, Col, Row } from "react-bootstrap"

const Category = ({data, selected}) => {
    return <Card className={'p-3 ' + (selected ? 'selected-card' : '')}>
        <Row>
            <Col>
                <h5 className="p-0 m-0">{data.name}</h5>
            </Col>
        </Row>
    </Card>
}

export default Category