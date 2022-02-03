import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import "../App.css";

const CreatePostModal = (props) => {
    
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
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <p>Expiry: </p>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <Form.Control type="date"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <p>Participant Limit: </p>
                                </div>
                                <div class="col-lg-6 col-md-12 d-flex flex-row">
                                    <Form.Control className="me-5" type="number" />
                                    <Form.Check className="ms-3 me-2"label="Unlimited"/>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-12">
                                    <p>Category: </p>
                                </div>
                                <div class="col-lg-6 col-md-12">
                                    <Form.Control type="text"/>
                                </div>
                            </div>
                            <Form.Label>Tags:</Form.Label>
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