import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap';

const styleCenter ={
        position:'relative',
        left:'47%',
        marginTop: '-10px'
    }
export default class Fun extends React.Component{
    

    render(){
        return(
            <div className= 'fn-container section dark'>
                <Container fluid>
                <Row>
                                <Col md={6}>
                                    <Image src='/Images/fighting.jpg' className='fn-photo-1' rounded />
                                
                                </Col>
                                <Col md={{span: 5, offset: 1}} lg={{span:4, offset: 1}} >
                                    <div className='fn-first-text'>
                                        <h3>Something interesting about me</h3>
                                        <p>
                                            When I&#39;m not working on projects or studying, I like to spend my time training in Muay Thai!
                                            I started training when I was 23, and have been completely consumed by it ever since.
                                            I enjoy drinking beer, almost too much. I love the IPA&#39;s. Love IPA&#39;s. 
                                            I like to listen to hip-hop, mostly J.Cole, Kanye West, and Lil Wayne.
                                            Fun fact is that I&#39;ve never broken a bone..... knock on wood :D
                                        </p>
                                            <p style={{textAlign:'center'}}>Check out some of my fights on youtube</p>
                                            <i className="fab fa-youtube fa-3x" style={styleCenter}></i>
                                            
                                            
                                        
                                    </div>
                                    {/* <div className='iframe' style="width:100%; height:635px; border:2px solid grey; overflow:hidden">
  <iframe src="https://www.youtube.com/channel/UCkDMcCdR0wzYpF8BDGujGSg?view_as=subscriber" style={{width:100%; height:700px; margin-top: -65px scrolling=true}}>
     If you can see this, your browser doesn't support iframes. Click <a href=http://mychannel.url>here to
     see my YouTube channel.</a>
</div> */}
                                </Col>
                            </Row>
                </Container>
            </div>
        );
    }

}