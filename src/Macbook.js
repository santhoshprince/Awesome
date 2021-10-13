import React from "react";
import './Macbook.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCoffee, faMobile, faPen, faRocket } from '@fortawesome/free-solid-svg-icons';
import img1 from './images/one.png';
import { Image } from 'react-bootstrap';
class Macbook extends React.Component {
    render() {
        return (
            <section className="mac">
                <Container >
                    <Row className="mac-one">
                        <Col md={6} className="poli">
                            <Image src={img1} fluid />
                        </Col>
                        <Col md={6} className="poli">
                            <div className="main">
                                <FontAwesomeIcon icon={faRocket} className="ttf" ></FontAwesomeIcon>
                                <div className="qsd">
                                    <h5>Quick install</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
                                </div>
                            </div>
                            <div className="main">
                                <FontAwesomeIcon icon={faRocket} className="ttf" ></FontAwesomeIcon>
                                <div className="qsd">
                                    <h5>Quick install</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Ut wisi enim ad minim veniam, quis nostrud.</p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

        )
    }
}

export default Macbook;