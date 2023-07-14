import { Col, Container, Row } from "react-bootstrap"

const Content = (props) => {
    return (
        <>
            <div className="product-content">
                <img className="product-content-img" src={props.src}alt="pic" />
                <p>{props.heading}</p>
                <div className="trending-star">
                    <img src="images/star icon.png" alt="pic" />
                    <img src="images/star icon.png" alt="pic" />
                    <img src="images/star icon.png" alt="pic" />
                    <img src="images/star icon.png" alt="pic" />
                </div>
                <h4>$45</h4>
            </div>
        </>
    )
}

export const Product = () => {
    return (
        <>
            <section className="section product-section">
                <Container>
                    <Row className="text-center">
                        <h1>All Products</h1>
                        <Col>
                            <div className="product-section-box">
                                <Content heading="facewash" src="images/Product 1.png"/>
                                <Content heading="facewash" src="images/Product 2.png"/>
                                <Content heading="facewash" src="images/Product 3.png"/>
                                <Content heading="facewash" src="images/Product 4.png"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}