import { Modal, Button, Form, Badge, Dropdown} from 'react-bootstrap';
import { React, useState } from 'react';
import "../App.css";

const CreatePostModal = (props) => {
    const [checked, setChecked] = useState(false);
    const handleChecked = (e) => {
        setChecked(e.target.checked)
    }
    
    return (
            <Modal
                backdrop="static"
                keyboard={false}
                show={props.show}
                onHide={()=>props.handleClose()}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Create post
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Title" />
                            {/* <Form.Label>Description</Form.Label> */}
                            <Form.Control as="textarea" rows={3} placeholder='Enter description' />
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Expiry: </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <Form.Control type="date"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Participant Limit: </p>
                                </div>
                                <div className="col-lg-6 col-md-12 d-flex flex-row">
                                    <Form.Control className="me-5" type="number" disabled={checked === true ? true : false}/>
                                    <Form.Check className="ms-3 me-2"label="Unlimited" onClick={handleChecked}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Category: </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="secondary" className="primarycolor" id="dropdown-basic" title="Select">Select Category</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1">Cab share</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Groceries</Dropdown.Item>
                                            <Dropdown.Item eventKey="3">Vacation</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <Form.Label>Tags:</Form.Label>
                            <p>
                                <Badge pill bg="badge">Gatorshare</Badge>
                                <Badge pill bg="badge">tag2</Badge>
                                <Badge pill bg="badge">niche</Badge>
                                <Badge pill bg="badge">rtx2080</Badge>
                            </p>
                            {/* Expiry:  */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.handleClose()}>
                        Cancel
                    </Button>
                    <Button  className='primarycolor'onClick={()=>props.handleClose()}>Post</Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default CreatePostModal