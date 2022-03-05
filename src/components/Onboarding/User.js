import { Card, Col, Image, Row } from "react-bootstrap"

const User = ({ data, selected }) => {
    return <Card className={'p-3 ' + (selected ? 'selected-card' : '')}>
        <Row>
            <Col sm="auto">
                <Image roundedCircle width={24} height={24} src={data.avatar} />
            </Col>
            <Col>
                <h5 className="p-0 m-0">{data.firstName + ' ' + data.lastName}</h5>
            </Col>
        </Row>
    </Card>
}

export default User