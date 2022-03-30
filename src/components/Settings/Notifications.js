import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Data from "../../data/Data"
import { setUser } from "../../utils/SessionUtils"


const Notifications = () => {

    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])

    return <div className="page bg-light ps-5">
        <Row>
            <h2 className="mb-3">Notifications</h2>
            
        </Row>
    </div>
}

export default Notifications