import React, { useState } from 'react'
import './header.css'
import dfcLogo from '../../images/dfcLogo.png'
import whitepaper from '../../images/assets/whitePaperNew.pdf'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'

const HomeHeader = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Navbar expand="lg" fixed="top" className={colorChange ? 'colorChange' : ''}>
      <Container>
        <Navbar.Brand href="/">
          <img src={dfcLogo} alt="" className='img-fluid' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fas fa-bars"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">DFC Tipper</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">DFC Coin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Launchpad</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dehim</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Defipay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logistic/Transportation</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/#roadmap">Roadmap</Nav.Link>
            <Nav.Link href={whitepaper} target="_blank" rel='noreferrer'>Paper</Nav.Link>
            <Nav.Link href="/markets">Markets</Nav.Link>
            <Nav.Link href="https://deficonnect.medium.com/">News</Nav.Link>
            <Nav.Link href="#home" className='header-button d-none d-sm-inline-block'>
              Buy DFC
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HomeHeader