import { Modal, Button, Form, Badge, Dropdown} from 'react-bootstrap';
import { React, useState } from 'react';
import data from "../data/Data";
import "../App.css";

const CreatePostModal = (props) => {
    const [checked, setChecked] = useState(false);
    const [tag, setTag] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(new Date());
    const [limit, setLimit] = useState();
    const [tags, setTags] = useState([]);
    const handleChecked = (e) => {
        setChecked(e.target.checked)
        setLimit(0);
    }

    const handleTagsEnter = () => {
        setTags([...tags,tag])
        setTag("");    
    }
    const createPost = () => {
        const requestData = JSON.stringify({title: title, description: desc, userLimit: parseInt(limit), status: 1, tags: tags, expiry: new Date(date).getTime()})
        
        data.createPost(requestData).then(res => {
            props.handleClose();
        })
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
                            <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            {/* <Form.Label>Description</Form.Label> */}
                            <Form.Control as="textarea" rows={3} placeholder='Enter description' value={desc} onChange={(e) => setDesc(e.target.value)}/>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Expiry: </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Participant Limit: </p>
                                </div>
                                <div className="col-lg-6 col-md-12 d-flex flex-row">
                                    <Form.Control className="me-5" type="number" disabled={checked === true ? true : false} value={limit} onChange={(e) => setLimit(e.target.value)}/>
                                    <Form.Check className="ms-3 me-2"label="Unlimited" onClick={handleChecked}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <p>Category: </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <Form.Select aria-label="Default select">
                                        <option>Select Category</option>
                                        <option value="1">Cab share</option>
                                        <option value="2">Groceries</option>
                                        <option value="3">Vacation</option>
                                        <option value="4">Meetup</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6 col-md-12">
                                    <p>Enter Tags: </p>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <Form.Control type="text" placeholder="Enter tag" value={tag} onChange={(e) => setTag(e.target.value)} onKeyPress={event => event.key === "Enter" && handleTagsEnter()}/>
                                </div>
                            </div>
                            {
                                tags.map(t => {
                                    return <Badge pill bg="badge">{t}</Badge>
                                })
                            }
                            {/* Expiry:  */}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>props.handleClose()}>
                        Cancel
                    </Button>
                    <Button  className='primarycolor' onClick={()=>createPost()}>Post</Button>
                </Modal.Footer>
            </Modal>
             
    )
}

export default CreatePostModal