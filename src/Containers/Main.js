import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';

export default class Main extends React.Component{

    render(){
        return(
            <div className='main-container section light'>
                <Container fluid>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Image src='/Images/profilepic.jpg' className='stock-photo' roundedCircle/>
                        </Col>
                        <Col lg={6} md={12}>
                            <div className='main-text'>
                                <header>
                                    <h1><strong>Hey!</strong> My name is <strong>Derrick</strong>.</h1>
                                </header>
                           
                                <p>
                                    I'm a  new developer from Chicago, but based out of Cincinnati, OH.
                                    I believe websites should be profound, robust, responsive, and reliable.
                                    Let me build it, with the react.js framework and bootstrap anything is possible!
                                </p>

                            </div>
                            
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        );
    }

}