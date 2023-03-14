import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Main() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">React Projects</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Project1</Nav.Link>
            <Nav.Link href="#features">Project2</Nav.Link>
            <Nav.Link href="#pricing">Project3</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}