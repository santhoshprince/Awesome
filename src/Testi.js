import react from "react";
import "./Testi.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import React from "react";
class Testi extends React.Component {
    render() {
        return (
            <div>

                <section className="bh">
                    <Container>
                        <Col md={12} className="tes">
                            <div class="kl">
                                <h2>TESTIMONIAL</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                            </div>

                        </Col>
                    </Container>
                </section>

            </div >
        )
    }

}




export default Testi;