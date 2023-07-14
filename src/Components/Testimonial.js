import { Container, Row, Col } from "react-bootstrap"
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



export const Testimonial = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <section className="section testimonial-section">
                <Container>
                    <Row>
                        <Col>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <div className="crousal-content">
                                    <h2>Testimonial</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <h3>John Williams</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className="crousal-content">
                                    <h2>Testimonial</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <h3>John Williams</h3>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                <div className="crousal-content">
                                    <h2>Testimonial</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                    <h3>John Williams</h3>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}