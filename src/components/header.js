import React, { Component } from 'react'
import { Nav, Navbar } from 'react-bootstrap'; 

export class header extends Component {
    render() {
        return (
            <Navbar fixedTop expand="lg" className="Navbar">
            <Navbar.Brand className="brand" href="/"><strong style={{color:'white'}}>Urbateur</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto nav">
                  <Nav.Link className="nav__link" href="#features"><span className="nav__label">Qui Somme Nous </span></Nav.Link>
                  <Nav.Link className="nav__link" href="#features"><span className="nav__label">Nous-Contacter</span></Nav.Link>
                  <Nav.Link className="nav__link" href="/signin"><span className="nav__label">Se connecter</span></Nav.Link>
                  <Nav.Link className="nav__link" href="/signup"><span className="nav__label">S'inscrire</span></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default header
