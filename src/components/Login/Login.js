import {Button, Form} from 'react-bootstrap';

const Login = () => {
    return <div className="login-center d-flex justify-content-center align-items-center">
        <Form className="form rounded m-4 p-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name:</Form.Label>
                <Form.Control type="email" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>
            <Button variant="primary" type="submit" className='gatorshare-button'>
                Login
            </Button>
        </Form>
    </div>
} 

export default Login