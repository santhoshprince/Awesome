import React from "react";
import "./Action.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
class Action extends React.Component {
    render() {
        return (
            <div>
                <section className="back">
                    <Container fluid>
                        <Row>
                            <Col md={12} className="bbc">
                                <h1>Call To Action</h1>
                                <p style={{ textAlign: "center", padding: "18px 0px" }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </Col>
                        </Row>


                    </Container>


                </section>
            </div>


        )
    }
}













export default Action;



