import { useEffect } from "react"
import { Row } from "react-bootstrap"
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
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
                <label className="form-check-label" for="flexSwitchCheckChecked">Recieve email alerts</label>
            </div>
        </Row>
    </div>
}

export default Notifications