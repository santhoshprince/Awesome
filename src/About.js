import React from "react";
import "./About.css";
import "./Ani.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import im1 from "./images/1.jpg";
import im2 from "./images/1.jpg";
import im3 from "./images/1.jpg";
import { Image } from "react-bootstrap";





class About extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12} className="us">
                            <h1>About Us</h1>
                        </Col>
                    </Row>

                    <Row className="abs">
                        <Col md={4}>
                            <Image src={im1} fluid />
                            <h3>John Doe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </Col>
                        <Col md={4}>
                            <Image src={im2} fluid />
                            <h3>John Doe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </Col>
                        <Col md={4}>
                            <Image src={im3} fluid />
                            <h3>John Doe</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
                        </Col>


                    </Row>


                </Container>
            </div>
        )
    }
}



export default About;

