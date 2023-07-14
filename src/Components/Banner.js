import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export const Banner = () => {
    return (
        <>
            <section className="banner-section">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="banner-content">
                                <h1>Nature, and Brighten & Rejuvenate</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni atque vel iusto consequatur quidem dolores quoss </p>
                                <button className="btn"><span>Shop Now</span><img src="images/arrow-down-sign-to-navigate.png" alt="pic" /></button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}