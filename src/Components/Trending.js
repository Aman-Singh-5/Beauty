import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

const Content = (props) => {
    return (
        <>
            <Col lg={4}>
                <div className="trending-section-box text-center">
                    <img className="trending-background-img" src={props.src} alt="pic" style={{width: props.width}}/>
                    <div className="trending-section-content text-center">
                        <h2>{props.heading}</h2>
                        <div className="trending-star">
                            <img src="images/star icon.png" alt="pic" />
                            <img src="images/star icon.png" alt="pic" />
                            <img src="images/star icon.png" alt="pic" />
                            <img src="images/star icon.png" alt="pic" />
                        </div>
                        <h3>{props.price}</h3>
                    </div>
                </div>
            </Col>
        </>
    )
}

export const Trending = () => {
    return (
        <>
            <section className="section trending-section">
                <Container>
                    <div className="trending-section-content text-center">
                        <h1> Trending on Beauty</h1>
                        <p> lorem ispundt uyhnglore lorem ispum lorem ispum</p>
                    </div>
                    <Row>
                        <Content src="images/Trending 1.png" heading="Fashwash" price="$95" />
                        <Content src="images/Trending 2.png" heading="Foundation" price="$85" width="95%"/>
                        <Content src="images/Trending 3.png" heading="Sunscreen" price="$75" width="71%"/>
                    </Row>
                </Container>
            </section>
        </>
    )
}