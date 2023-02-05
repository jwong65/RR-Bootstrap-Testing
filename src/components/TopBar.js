import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

export default function TopBar() {
  return (
    <Navbar expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand style={{margin: '10px 0 0 20px'}}>
            This is a Brand.
        </Navbar.Brand>
      </Container>
      
      <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
      <Navbar.Collapse id ='basic-navbar-nav' style={{display: 'flex-container', padding:"1em 10px 10px 1em"}}>
        <Nav className='mr-auto'></Nav>
          <Nav.Link href='#LogTest'>Log In Test</Nav.Link>
          <Button variant ='success'>Sign up Test</Button>
      </Navbar.Collapse>
    </Navbar>
  )
}
