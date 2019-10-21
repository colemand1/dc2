import React from 'react';
import {Container, Col, Row, Image, Button} from 'react-bootstrap';
import {Link} from 'react-scroll';


export default class About extends React.Component{
    

    render(){
        return(
            <div className= 'about-container section dark'>
                <Container fluid>
                <h1>I'm a front-end developer</h1>
                    <br />
                    <i class="fab fa-js-square"></i>
                    <i class="fab fa-node-js"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-react"></i>
                    <br />
                    <p>
                        Currently, I am building projects in a node environment, using node.js, express.js, and react.js. 
                        I am also familiar with SQL, Mongo.db, VB.Net, Java, and C. 
                        I&#39;m improving on implementing backend integration into my apps and projects.
                        Stay tuned for more projects coming soon...
                    </p>
                    <br />
                    <Row>
                        <Col>
                            <h2>I work day-to-day with:</h2>
                            <br />
                            <p>
                                Javascript  |  HTML  |  CSS  |  React.Js  |  Node.js
                            </p>
                        </Col>
                        <Col>
                            <h2>I'm familiar with:</h2>
                            <br />
                            <p>MongoDb  |   SQL  |  VB.Net  |  C  |  Python</p>
                                
                        </Col>
                    </Row>   

                    <br />
                    <Link
              
                    activeClass="active"
                    to="portfolio-container"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                    >
                        <Button variant="dark">Check out some projects</Button> 
                    </Link>
                    
                   
                </Container>
            </div>
        );
    }

}