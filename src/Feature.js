import React from "react";
import './Feature.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCoffee, faMobile, faPen } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
class Feature extends React.Component {



    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={12} className="Fea">
                            <h1>Feature</h1>
                        </Col>
                    </Row>
                    <Row className="Ten">
                        <Col md={3} className="nine ty">
                            <FontAwesomeIcon icon={faCoffee} className="tt" ></FontAwesomeIcon>
                            <h5>Responsiove Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </Col>
                        <Col md={3} className="nine tf">
                            <FontAwesomeIcon icon={faMobile} className="tt"></FontAwesomeIcon>
                            <h5>Responsiove Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </Col>
                        <Col md={3} className="nine hj">
                            <FontAwesomeIcon icon={faCircle} className="tt"></FontAwesomeIcon>
                            <h5>Responsiove Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </Col>
                        <Col md={3} className="nine kk">
                            <FontAwesomeIcon icon={faPen} className="tt"></FontAwesomeIcon>
                            <h5>Responsiove Design</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                        </Col>




                    </Row>
                </Container>

            </div>
        )
    }
}
export default Feature;