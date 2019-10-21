import React from 'react';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';

export default class Contact extends React.Component{

    render(){
        return(
            <div className= 'contact-container section light'>
                <Container fluid>
                    <h2>Let me make somethings for you.</h2>
                    <p>Also let me know your questions and concerns</p>
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Group controlId="frmName">
                                    <Form.Control type="text" placeholder="Name" />
                                </Form.Group> 
                            </Col> 
                            <Col>
                                <Form.Group controlId="frmEmail">
                                    <Form.Control type="email" placeholder="Email" />
                                </Form.Group> 
                            </Col>
                        </Form.Row>
                         <Form.Group controlId="frmSubject">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group> 
                        <Form.Group controlId="frmText.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="Message" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        );
    }

}