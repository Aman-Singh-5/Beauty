import { Container } from "react-bootstrap"

const Content = (props) => {
    return (
        <>
            <div className="pic-inner-box">
                <img src={props.src} alt="pic" />
            </div>
        </>
    )
}

export const Pics = () => {
    return (
        <>
            <section className="section pic-section">
                <Container fluid>
                    <div className="pic-outer-box">
                        <Content src="images/Insta 1.png"/>
                        <Content src="images/Insta 2.png"/>
                        <Content src="images/Insta 3.png"/>
                        <Content src="images/Insta 4.png"/>
                        <Content src="images/Insta 5.png"/>
                    </div>
                </Container>
            </section>
        </>
    )
}