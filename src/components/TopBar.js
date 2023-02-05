import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

export default function TopBar() {
  return (
    <Navbar expand='lg' bg='light'>
      <Container>
      <Navbar.Brand style={{margin: '10px 0 0 20px'}}>
        This is a Brand.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
      <Navbar.Collapse id ='basic-navbar-nav' style={{display: 'flex', margin: '1em 0 0 1em'}}>
        <Nav className='mr-auto'></Nav>
          <Nav.Link href='#LogTest'>Log In Test</Nav.Link>
          <Button variant ='success'>Sign up Test</Button>
          <NavDropdown id='basic-nav-dropdown' title='DropDown Testing'>
            <NavDropdown.Item href=''>Action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Another item</NavDropdown.Item>
          </NavDropdown>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
