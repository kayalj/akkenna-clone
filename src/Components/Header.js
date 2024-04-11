import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/Logo.svg';
import '../App.css';
import Dropdown from 'react-bootstrap/Dropdown';


import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <div className='header'>
      <Navbar data-bs-theme="light">
        <Container>
          <Navbar.Brand > 
            <a href='#'>
                <img src={logo}></img>
            </a>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">About Us</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Web Development</Dropdown.Item>
                <Dropdown.Item href="#/action-3">App Development</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Developers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Web Development</Dropdown.Item>
                <Dropdown.Item href="#">App Development</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Animations
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">3D Animation</Dropdown.Item>
                <Dropdown.Item href="#">NFT Design</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Sample Product</Dropdown.Item>
                <Dropdown.Item href="#">Client Product</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#">Blogs</Nav.Link>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>
            <Button className='header-contact-btn'>Contact Us</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
    
  )
}

export default Header
