import React from 'react'
import { Container, Nav, Navbar, } from 'react-bootstrap';
import images1 from "./images/9.png"
import "./Header.css"
import Button1 from './Button1';

function Header() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
          <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand href="#"><img src={images1} alt='' className='mainlogo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll" className='navscroll' >
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontWeight: "" }}
                            navbarScrol>
                            <Nav.Link href="#action1" className='navs'>BLOG</Nav.Link>
                            <Nav.Link href="#action2" className='navs'>ABOUT</Nav.Link>
                            <Nav.Link href="#action1" className='navs'>LINKS</Nav.Link>
                            <Nav.Link href="#action2" className='navs'>PROJECTS</Nav.Link>
                            <Nav.Link href="#action2" className='navs'><Button1 style={{backgroundColor:"seagreen",padding:"5px 30px",border:"none",borderRadius:"none",fontWeight:"bold"}}>Sign Up Free</Button1></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

          </div>
        </div>
      </div>

    </>
  )
}

export default Header