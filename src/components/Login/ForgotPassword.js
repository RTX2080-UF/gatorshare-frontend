import { Button, Form } from 'react-bootstrap';
import BGImage from "../BGImage"
import data from "../../data/Data"
import { useEffect, useState } from "react"


const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const handlePasswordReset = () => {
        data.resetPassword(email).then(res => {
            console.log("Reset done")
            // setUser(res.data)
        }).catch(error => {
            window.alert(error)
            // window.location.href = "/"
        })
    }

    return <div>
        <BGImage />
        <div className="login-center d-flex justify-content-center align-items-center">
            <Form className="form rounded m-4 p-4">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-pass">Enter EmailID to receive password reset link</label>
                        <input className="form-control mt-2" type="email" id="account-pass" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="col-12 pt-4">
                    <Button variant="primary" type="submit" className='mb-3 gatorshare-button' onClick={()=>handlePasswordReset()}>
                        Send Code
                    </Button>
                </div>
                <p className="forgot-password text-left">
                    <a href="/login">Go back to Login?</a>
                </p>
            </Form>
            
        </div>
    </div>
}

export default ForgotPassword