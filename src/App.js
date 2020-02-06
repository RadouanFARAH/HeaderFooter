import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Nav, Navbar} from 'react-bootstrap' 


function App() {
  return (
    <div className="container">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Urbateur</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link style={{backgroundColor:'white', color:'black'}} href="#deets">Qui Somme Nous</Nav.Link>
        <Nav.Link style={{backgroundColor:'white', color:'black'}}  eventKey={2} href="#memes">
          Nous-Contacter
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <footer className="footer text-center">
    <div className="container">
      <p className="footer-text">Footer</p>
    </div>
  </footer>
  </div>
  );
}

export default App;
