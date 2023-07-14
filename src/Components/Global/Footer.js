import { Container, Row, Col } from "react-bootstrap"

export const Footer = () => {
    return(
        <>
            <section className="section footer-section"> 
                <Container>
                    <div className="footer-outer-div">
                    <Row>
                        <Col lg={3}>
                            <div className="footer-img-div">
                                <img className="beauty-img" src="images/image.png" alt="pic"/>
                                <div className="footer-social-div d-flex">
                                    <img src="images/instagram.png" alt="pic"/>
                                    <img src="images/linkedin (1).png" alt="pic"/>
                                    <img src="images/facebook.png" alt="pic"/>
                                    <img src="images/twitter (1).png" alt="pic"/>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="footer-link-outerdiv">
                                <h2>Useful Links</h2>
                                <div className="footer-link-innerdiv">
                                <ul>
                                    <li>Shop</li>
                                    <li>Blog</li>
                                    <li>Portfolio</li>
                                    <li>Portfolio Gallery</li>
                                </ul>
                                <ul>
                                    <li>About Beauty</li>
                                    <li>Order Tracking</li>
                                    <li>Team</li>
                                    <li>Contact Us</li>
                                </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="footer-news-div">
                                <h2>News Letter</h2>
                                <p>Sign up to recieve the latest articles from Beauty & Cosmetics</p>
                                <form>
                                    <input type="email"/>
                                    <button className="btn-subscribe">Subscribe</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                    </div>
                    <hr/>
                    <Row>
                        <Col lg={6} md={5} className="footer-rights-div">
                            <span>2022 Beauty. All Rights Reserved.</span>
                        </Col>
                        <Col lg={6} md={7}>
                            <div className="footer-privacy-div">
                            <ul>
                                <li>Privacy Policy</li>
                                <li>ToS</li>
                                <li>Sitemap</li>
                                <li>Partners</li>
                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}