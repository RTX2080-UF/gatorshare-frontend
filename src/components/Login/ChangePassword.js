import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BGImage from "../BGImage"
import React, { useEffect, useState } from "react"
import {useLocation} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import data from "../../data/Data"

const ChangePassword = () => {
    
    const [confirmPwd, setConfirmPwd] = useState('');
    const [pwd, setPwd] = useState('');
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    // const [searchParams] = useSearchParams();
    const location = useLocation();
    
    useEffect(() => {
        console.log("ChangePassword", location.state)
        setToken(location.state.token);
        setEmail(location.state.email);
        // if(searchParams.has('email') && searchParams.has('token')){
        //     var e = searchParams.get('email');
        //     var t = searchParams.get('token');
        //     setToken(e);
        //     setEmail(t);
        // }else{
        //     alert("Inavlid reset link!!");
        // }
    }, [])

    const handleChangePassword = (e) => {
        e.preventDefault();
        if (pwd !== confirmPwd) {
            alert("Passwords don't match");
        } else {
            console.log("Email - ", email)
            console.log("Token - ", token)
            const requestData = `{ "email": "${email}", "token": "${token}", "password":"${pwd}" }`;
            data.updatePassword(requestData).then(res => {
                console.log("PAssowrd updated!!!!")
            })
        }
        
    };

    return <div>
        <BGImage />
        <div className="login-center d-flex justify-content-center align-items-center">
            <Form className="form rounded m-4 p-4" onSubmit={handleChangePassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter New Password</Form.Label>
                    <Form.Control type="text" id="username" placeholder="New Password" value={pwd} onChange={(e) => setPwd(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm New Password</Form.Label>
                    <Form.Control type="password" id="password" placeholder="Confirm New Password" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" className='mb-3 gatorshare-button'>
                    Set Password
                </Button>
            </Form>
        </div>
    </div>
}

export default ChangePassword