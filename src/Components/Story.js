import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Story = () => {
    return(
        <>
            <section className="section story-section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="story-section-content">
                                <h1>
                                    Our Story
                                </h1>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni atque vel iusto consequatur quidem dolores quos, tempora autem vitae quaerat quibusdam unde ipsam ab odio voluptate non numquam earum!</p>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni atque vel iusto consequatur quidem dolores quos, tempora autem vitae quaerat quibusdam unde ipsam ab odio voluptate non numquam earum!</p>
                                <button className="btn"><span>Read More</span><img src="images/arrow-down-sign-to-navigate.png" alt="pic"/></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}