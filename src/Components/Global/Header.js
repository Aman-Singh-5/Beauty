import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
    return(
        <>
            <Navbar expand="lg" className="bg-body-transparent">
      <Container>
        <Navbar.Brand href="#"><img src='images/Logo.png' alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">New Patient</Nav.Link>
            <Nav.Link href="#">Our Services</Nav.Link>
            <Nav.Link href="#">
              Contact Us
            </Nav.Link>
          </Nav>
            <Button>Get in Touch</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        </>
    )
}