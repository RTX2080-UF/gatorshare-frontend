import { useState } from "react"
import { Row } from "react-bootstrap"
import data from "../../data/Data"
import { setUser } from "../../utils/SessionUtils"
import { Form } from 'react-bootstrap';


const Security = () => {
    const [currentPwd, setCurrentPwd] = useState("");
    const [newPwd, setNewPwd] = useState("");
    const [confirmNewPwd, setConfirmNewPwd] = useState("");

    const updatePassword = () => { 
        if (newPwd !== confirmNewPwd) {
            alert("Passwords don't match");
        } else {
            const requestData = `{"OldPassword":"${currentPwd}","Password":"${newPwd}"}`;
            data.updateProfile(requestData).then(res => {
                setUser(res.data)
            })
        }
    }


    return <div className="page bg-light ps-5">
        <Row>
            <h2 className="mb-3">Security</h2>
            <h4 className="mb-3 pt-4">Change Password</h4>
            <div className="col-lg-8 pb-5">
                <Form className="row">
                    <div className="col-md-9">
                        <div className="form-group">
                            <label for="account-pass">Current Password</label>
                            <input className="form-control" type="password" id="account-pass" value={currentPwd} onChange={(e) => setCurrentPwd(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="form-group">
                            <label for="account-confirm-pass">New Password</label>
                            <input className="form-control" type="password" id="account-new-pass" value={newPwd} onChange={(e) => setNewPwd(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="form-group">
                            <label for="account-confirm-pass">Confirm New Password</label>
                            <input className="form-control" type="password" id="account-confirm-pass" value={confirmNewPwd} onChange={(e) => setConfirmNewPwd(e.target.value)}/>
                        </div>
                    </div>
                    <div className="col-12 pt-4">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <button className="btn btn-style-1 btn-primary" type="button" data-toast="" data-toast-position="topRight" data-toast-type="success" data-toast-icon="fe-icon-check-circle" data-toast-title="Success!" data-toast-message="Your profile updated successfuly." onClick={()=>updatePassword()}>Change Password</button>
                        </div>
                    </div>
                </Form>
            </div>
        </Row>
    </div>
}

export default Security