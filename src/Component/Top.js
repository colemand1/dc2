import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
var duration = 1000;

class Top extends React.Component{
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
      render() {
        return(
          <Navbar collapseOnSelect expand="md" variant="dark" bg="dark" sticky="top">
          <Container>
            <Navbar.Brand onClick={this.scrollToTop} className="my-tab">Derrick C.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className='mr-auto'>
            <Link
                activeClass="active"
                to="about-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={duration}
              >
                <Nav.Item className='my-tab'>About</Nav.Item>
              </Link>

              <Link
              
              activeClass="active"
              to="portfolio-container"
              spy={true}
              smooth={true}
              offset={-50}
              duration={duration}
            >
              <Nav.Item className='my-tab'>Portfolio</Nav.Item>
            </Link>

              <Link
                activeClass="active"
                to="fn-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={duration}
              >
                <Nav.Item className='my-tab'>Activites</Nav.Item>
              </Link>
              

              <Link
           
                activeClass="active"
                to="contact-container"
                spy={true}
                smooth={true}
                offset={-50}
                duration={duration}
              >
               <Nav.Item className='my-tab'>Contact</Nav.Item>
              </Link>
              </Nav>
              </Navbar.Collapse>
          </Container>
        </Navbar>
        );
      }
}

export default Top;