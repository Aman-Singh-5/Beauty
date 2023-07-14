import { Col, Container, Row } from "react-bootstrap"

export const Discover = () => {
    return(
        <>
            <section className="section discover-section">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center">
                            <h1 style={{marginBottom: "1rem"}}>More to Discover</h1>
                            <p style={{maxWidth: "34rem", margin: "auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet.</p>
                        </Col>
                        <Col lg={6} className="p-0">
                            <div className="discover-content text-center">
                                <img className="discover-content-img" src="images/More to discover 1.png" alt="pic"/>
                                <h2>Summer Collection</h2>
                                <button className="btn"><span>Shop Now</span><img src="images/arrow-down-sign-to-navigate.png" alt="pic"/></button>
                            </div>
                        </Col>
                        <Col lg={6} className="p-0">
                        <div className="discover-content text-center">
                                <img className="discover-content-img" src="images/More to discover 2.png" alt="pic"/>
                                <h2>Summer Collection</h2>
                                <button className="btn"><span>Shop Now</span><img src="images/arrow-down-sign-to-navigate.png" alt="pic"/></button>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}