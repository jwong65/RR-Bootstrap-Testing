import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand style={{margin: '10px'}}>
          This is a Brand.
        </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id ='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#LogTest'>Log In Test</Nav.Link>
            <NavDropdown id='basic-nav-dropdown' title='DropDown Testing'>
              <NavDropdown.Item href=''>Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Another item</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
