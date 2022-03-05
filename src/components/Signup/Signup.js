import { Button, Form } from 'react-bootstrap';
import BGImage from "../BGImage"

const Signup = () => {
    return <div>
        <BGImage />
        <div className="login-center d-flex justify-content-center align-items-center">
            <Form className="form rounded m-4 p-4">
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <Button variant="primary" type="submit" className='mb-3 gatorshare-button'>
                    Sign Up
                </Button>
                <p className="forgot-password text-right">
                    Already have an account?  <a href="/login">sign in</a>
                </p>
            </Form>
        </div>
    </div>
}

export default Signup