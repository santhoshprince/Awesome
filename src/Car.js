import React from "react";
import './Car.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import { Card, ListGroup, ListGroupItem, } from 'react-bootstrap';
class Car extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>
                                        <div className="ons">
                                            <h3>$12/Month </h3>
                                            <h5>Basic</h5>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ backgroundColor: "#cac3c3" }}>FREELANCER</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(150 202 70)" }}>FREELANCER</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Cras justo odio</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Vestibulum at eros</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Vestibulum at eros</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>
                                        <div className="btn btn-primary" style={{ backgroundColor: "rgb(150 202 70)", border: "0px" }}>sign up</div>

                                    </ListGroupItem>
                                </ListGroup>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <div className="ons">
                                            <h3>$12/Month </h3>
                                            <h5>Basic</h5>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ backgroundColor: "#cac3c3" }}>FREELANCER</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(150 202 70)" }}>FREELANCER</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Cras justo odio</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Vestibulum at eros</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Vestibulum at eros</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>
                                        <div className="btn btn-primary" style={{ backgroundColor: "rgb(150 202 70)", border: "0px" }}>sign up</div>

                                    </ListGroupItem>
                                </ListGroup>

                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card >
                                <Card.Body>
                                    <Card.Title>
                                        <div className="ons">
                                            <h3>$12/Month </h3>
                                            <h5>Basic</h5>
                                        </div>
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ backgroundColor: "#cac3c3" }}>FREELANCER</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(150 202 70)" }}>FREELANCER</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Cras justo odio</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Dapibus ac facilisis in</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Vestibulum at eros</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>Vestibulum at eros</ListGroupItem>
                                    <ListGroupItem style={{ backgroundColor: "rgb(234 227 227)" }}>
                                        <div className="btn btn-primary" style={{ backgroundColor: "rgb(150 202 70)", border: "0px" }}>sign up</div>
                                    </ListGroupItem>
                                </ListGroup>

                            </Card>
                        </Col>

                    </Row>
                </Container>
            </div >
        )
    }
}






export default Car;