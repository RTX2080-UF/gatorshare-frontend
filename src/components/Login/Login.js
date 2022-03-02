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
            <Button variant="primary" type="submit" className='mb-3 gatorshare-button'>
                Login
            </Button>
            <p className="forgot-password text-left">
                <a href="#forgotPassword">Forgot password?</a>
            </p>
            <p className="forgot-password text-left">
                <a href="/signup">Create a new account?</a>
            </p>
        </Form>
    </div>
} 

export default Login