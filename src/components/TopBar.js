import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap';
import brandImage from '../instacart-logo.png'

export default function TopBar() {
  return (
    <div>
    <Navbar expand='lg' bg='primary' variant='dark'>
        <Navbar.Brand style={{margin: '5px 0 0 20px'}}>
            <img src={brandImage} alt='Instacart'></img>
        </Navbar.Brand>
      
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id ='basic-navbar-nav'>
        <Nav className='mr-auto'></Nav>
            <Nav style={{display:'flex'}}>
                <Nav.Link href='#LogTest'>Log In Test</Nav.Link>
                <Button variant ='success'>Sign up Test</Button>{' '}
            </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
