import { Col, Container, Row } from "react-bootstrap"

export const Whyus = () => {
    return(
        <>
            <section className="section whyus-section">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="whyus-content">
                                <h1>Why Us</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni atque vel iusto consequatur quidem dolores quos, tempora autem vitae quaerat quibusdam unde ipsam ab odio voluptate non numquam earum!</p>
                                <button className="btn"><span>Shop Now</span><img src="images/arrow-down-sign-to-navigate.png" alt="pic"/></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}