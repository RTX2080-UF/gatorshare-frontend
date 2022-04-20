import { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import data from "../../data/Data"
import { Form } from 'react-bootstrap';
import { setUser } from "../../utils/SessionUtils"


const Profile = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    useEffect(() => {
        data.getCurrentUser().then(user => {
            console.log("PROFILE : ", user)
            setFirstname(user.firstName)
            setLastName(user.lastName)
            setEmail(user.Email)
        })
    }, [])

    const updateProfile = () => {
        const requestData = `{ "Firstname": "${firstName}", "Lastname": "${lastName}", "Email": "${email}" }`;
        data.updateProfile(requestData).then(res => {
            setUser(res.data)
        })
    }
    

    return <div className="page bg-light ps-5">
        <Row>
            <h2 className="mb-3">Profile</h2>
            <div className="col-lg-8 pb-5">
                <Form className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-fn">First Name</label>
                            <input className="form-control" type="text" id="account-fn" value={firstName} onChange={(e) => setFirstname(e.target.value)} required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-ln">Last Name</label>
                            <input className="form-control" type="text" id="account-ln" value={lastName} onChange={(e) => setLastName(e.target.value)} required=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-email">E-mail Address</label>
                            <input className="form-control" type="email" id="account-email" value={email} onChange={(e) => setEmail(e.target.value)} disabled=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="account-phone">Phone Number</label>
                            <input className="form-control" type="text" id="account-phone" value="(***)-***-****" required="" disabled="true"/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="account-pass">Bio</label>
                            <Form.Control as="textarea" rows={3} id="account-bio" placeholder='Enter bio' value={bio} onChange={(e) => setBio(e.target.value)}/>
                        </div>
                    </div>
                   
                    <div className="col-12 mt-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <button className="btn btn-style-1 btn-primary" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly." onClick={()=>updateProfile()}>Update Profile</button>
                        </div>
                    </div>
                </Form>
            </div>
        </Row>
    </div>
}

export default Profile