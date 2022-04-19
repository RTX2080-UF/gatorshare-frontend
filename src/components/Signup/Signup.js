import { Button, Form } from 'react-bootstrap';
import BGImage from "../BGImage"
import data from "../../data/Data"
import { useState } from "react"
// import { useNavigate } from 'react-router-dom';
// import {setAccessToken} from '../../utils/SessionUtils'

const Signup = () => {

    // const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const requestData = `{"Username":"${username}","Firstname":"${firstName}","Lastname":"${lastName}","Email":"${email}","Password":"${pwd}"}`;
        data.register(requestData).then(res => {
            console.log("data");
            console.log(res.data);
            // setAccessToken(res.data);
            // navigate("/onboarding");
        })
    };

    return <div>
        <BGImage />
        <div className="login-center d-flex justify-content-center align-items-center">
            <Form className="form rounded m-4 p-4" onSubmit={handleSignUp}>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" id="username" className="form-control" placeholder="Enter user name" value={username} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="firstname" className="form-control" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="lastname" className="form-control" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
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