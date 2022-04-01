import { Button, Form } from 'react-bootstrap';
import BGImage from "../BGImage"


const ForgotPassword = () => {
    return <div>
        <BGImage />
        <div className="login-center d-flex justify-content-center align-items-center">
            <Form className="form rounded m-4 p-4">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="account-pass">Enter EmailID to receive OTP</label>
                        <input className="form-control" type="email" id="account-pass"/>
                    </div>
                </div>
                <div className="col-12 pt-4">
                    <Button variant="primary" type="submit" className='mb-3 gatorshare-button '>
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