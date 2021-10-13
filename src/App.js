import logo from './logo.svg';
import './App.css';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Row, Col } from 'react-bootstrap';
class App extends React.Component {
  render() {
    return (
      <section className="header" >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand className="fir" href="#home">AWESOME</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto sandy"  >
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#home">Contact</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Care</Nav.Link>
                <Nav.Link href="#home">Call action</Nav.Link>
                <Nav.Link href="#link">Testiminiol</Nav.Link>

              </Nav>
            </Navbar.Collapse>

          </Container >
        </Navbar>
        <Container>
          <Row>
            <div>
              <Col md={12} className="wwe">
                <h1>Awesome Template</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
              </Col>
            </div>

          </Row>
        </Container>
      </section>

    )
  }
}

export default App;
