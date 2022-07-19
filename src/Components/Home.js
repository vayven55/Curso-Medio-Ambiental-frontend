import React, { Fragment } from "react";
import "../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";

function Home() {
  return (
    <Fragment>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid className="me-auto">
            <Navbar.Brand href="#home">Myriam Peón Acal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="justify-content-end navbar-center "
                style={{ flex: 1 }}
              >
                <Nav.Link className="nav-link" href="/modulo1_programa-curso">
                  Justificación del curso
                </Nav.Link>
                <Nav.Link className="nav-link" href="/modulo1_presentacion">
                  Modulo 1
                </Nav.Link>
                <Nav.Link className="nav-link" href="/modulo1_presentacion/2">
                  Modulo 2
                </Nav.Link>

                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>*/}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Fragment>
  );
}

export default Home;
