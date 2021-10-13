import React from "react";
import './Services.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAssistiveListeningSystems, faCircle, faCoffee, faFootballBall, faMobile, faPen, faRocket, faRoute } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col, } from 'react-bootstrap';
class Services extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} className="ser">
                        <h1>Services</h1>


                    </Col>


                </Row>
                <Row className="nxt">
                    <Col md={4}>
                        <div className="wwf">
                            <FontAwesomeIcon icon={faAddressCard} className="qwe"></FontAwesomeIcon>
                            <h5>24/7 Support</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>


                    </Col>
                    <Col md={4} className="wwd">
                        <FontAwesomeIcon icon={faRocket} className="qwe"></FontAwesomeIcon>
                        <h5>24/7 Support</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Col>

                    <Col md={4}>
                        <div className="wwf">
                            <FontAwesomeIcon icon={faAssistiveListeningSystems} className="qwe"></FontAwesomeIcon>
                            <h5>24/7 Support</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </Col>


                </Row>
                <Row className="san">
                    <Col md={4}>
                        <div className="wwd">
                            <FontAwesomeIcon icon={faAddressCard} className="qwe"></FontAwesomeIcon>
                            <h5>24/7 Support</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>


                    </Col>
                    <Col md={4} className="wwf">
                        <FontAwesomeIcon icon={faRocket} className="qwe"></FontAwesomeIcon>
                        <h5>24/7 Support</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </Col>

                    <Col md={4}>
                        <div className="wwd">
                            <FontAwesomeIcon icon={faAssistiveListeningSystems} className="qwe"></FontAwesomeIcon>
                            <h5>24/7 Support</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </Col>


                </Row>


            </Container >



        )
    }


}

export default Services;