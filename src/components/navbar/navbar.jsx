import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Topnavbar() {
    return (
        <Navbar expand="lg" className="bg-light">
            <Container>
                <Navbar.Brand href="#">Front End Projects</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mx-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Projects" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Front end websites</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Clone Projects
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                components
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#">
                            Contact
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-secondary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topnavbar;