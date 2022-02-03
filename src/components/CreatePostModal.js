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