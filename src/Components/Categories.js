import { Col, Container, Row } from "react-bootstrap"

const Content = (props) => {
    return (
        <>
            <Col lg={2} md={6} sm={6}>
                <div className="image-container">
                    <div className="category-section-content">
                        <img src={props.src} alt="pic" />
                        <div className="text-overlay">
                            <p>Smoke</p>
                        </div>
                    </div>
                    <p className="text-center">10 Items</p>
                </div>
            </Col>
        </>
    )
}


export const Categories = () => {
    return (
        <>
            <section className="section category-section">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h1>Shop by Categories</h1>
                        </Col>
                        </Row>
                        <Row className="category-content-box">
                            <Content src="images/Category 1.png" />
                            <Content src="images/Category 2.png" />
                            <Content src="images/Category 3.png" />
                            <Content src="images/Category 4.png" />
                            <Content src="images/Category 5.png" />
                        </Row>
                </Container>
            </section>
        </>
    )
}