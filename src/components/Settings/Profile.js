import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Data from "../../data/Data"
import { setUser } from "../../utils/SessionUtils"
import { Button, Form } from 'react-bootstrap';


const Profile = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])
    const [firstname, setFirstname] = useState(props.userData.firstName);
    const [lastName, setLastName] = useState(props.userData.firstName);
    const [email, setEmail] = useState(props.userData.firstName);
    const [bio, setBio] = useState("");

    return <div className="page bg-light ps-5">
        <Row>
            <h2 className="mb-3">Profile</h2>
            <div className="col-lg-8 pb-5">
                <Form className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-fn">First Name</label>
                            <input className="form-control" type="text" id="account-fn" value={firstname} onChange={(e) => setFirstname(e.target.value)} required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-ln">Last Name</label>
                            <input className="form-control" type="text" id="account-ln" value={lastName} onChange={(e) => setLastName(e.target.value)} required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-email">E-mail Address</label>
                            <input className="form-control" type="email" id="account-email" value={email} onChange={(e) => setEmail(e.target.value)} disabled=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-phone">Phone Number</label>
                            <input className="form-control" type="text" id="account-phone" value="(***)-***-****" required="" disabled="true"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label for="account-pass">Bio</label>
                            <Form.Control as="textarea" rows={3} id="account-bio" placeholder='Enter bio' value={bio} onChange={(e) => setBio(e.target.value)}/>
                        </div>
                    </div>
                   
                    <div className="col-12 mt-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <button className="btn btn-style-1 btn-primary" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly.">Update Profile</button>
                        </div>
                    </div>
                </Form>
            </div>
        </Row>
    </div>
}

export default Profile