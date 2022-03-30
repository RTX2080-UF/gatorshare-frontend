import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import Data from "../../data/Data"
import { setUser } from "../../utils/SessionUtils"
import { Button, Form } from 'react-bootstrap';


const Profile = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        Data.getCurrentUser().then(user => {
            setUser(user)
        })
    }, [])

    return <div className="page bg-light ps-5">
        <Row>
            <h2 className="mb-3">Profile</h2>
            <div className="col-lg-8 pb-5">
                <Form className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-fn">First Name</label>
                            <input className="form-control" type="text" id="account-fn" value="Daniel" required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-ln">Last Name</label>
                            <input className="form-control" type="text" id="account-ln" value="Adams" required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-email">E-mail Address</label>
                            <input className="form-control" type="email" id="account-email" value="daniel.adams@example.com" disabled=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-phone">Phone Number</label>
                            <input className="form-control" type="text" id="account-phone" value="+7 (805) 348 95 72" required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-pass">New Password</label>
                            <input className="form-control" type="password" id="account-pass"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="account-confirm-pass">Confirm Password</label>
                            <input className="form-control" type="password" id="account-confirm-pass"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <hr className="mt-2 mb-3"/>
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