import React from 'react'
import { Modal, Button } from 'react-bootstrap';


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
                <div className="mb-3 text-center justify-content-center">
                        <input type="text" className="form-control" style={{ width: '100%' }} placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
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