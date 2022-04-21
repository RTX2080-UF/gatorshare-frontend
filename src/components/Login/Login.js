import { Button, Form } from 'react-bootstrap';
import BGImage from "../BGImage"
import data from "../../data/Data"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { setUser, setAccessToken } from '../../utils/SessionUtils'
import { DEMO_DB } from '../../data/Demo';
import { getGravatar } from '../../utils/Utils';


const Login = () => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [pwd, setPwd] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const requestData = `{ "username": "${username}", "password": "${pwd}" }`;
        data.login(requestData).then(res => {
            setAccessToken(res.data.token);
            const email = res.data.userDetails.email
            setUser({
                ...res.data.userDetails,
                avatar: getGravatar(email),
                isOnboarded: (res.data.tag && res.data.tag.length > 0)
            })
            navigate("/onboarding");
        }).catch(error => {
            alert('Either details are wrong or the user is not registered!! \n')
            // window.location.href = "/"
        })
    };


    return <div>
        <BGImage />
        <div className="login-center d-flex justify-content-center align-items-center">
            <Form className="form rounded m-4 p-4" onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" id="username" placeholder="Enter Username" value={username} onChange={(e) => setUserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me signed in" />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-3 gatorshare-button'>
                    Login
                </Button>
                <p className="forgot-password text-left">
                    <a href="/forgotPwd">Forgot password?</a>
                </p>
                <p className="forgot-password text-left">
                    <a href="/signup">Create a new account?</a>
                </p>
            </Form>
        </div>
    </div>
}

export default Login