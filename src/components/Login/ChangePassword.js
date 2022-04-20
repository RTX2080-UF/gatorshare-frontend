import { Button, Form } from 'react-bootstrap';
import BGImage from "../BGImage"


const ChangePassword = () => {

    const navigate = useNavigate();
    const [confirmPwd, setConfirmPwd] = useState('');
    const [pwd, setPwd] = useState('');

    const handleChangePassword = (e) => {
        e.preventDefault();
        const requestData = `{ "username": "${username}", "password": "${pwd}" }`;
        data.login(requestData).then(res => {
            navigate("/login");
        })
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