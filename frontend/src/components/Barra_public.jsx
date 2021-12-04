import React from 'react'
import {Navbar, Container,Nav,NavDropdown,Form, Button, Offcanvas, FormControl} from 'react-bootstrap'

export default function nav() {
    return (
        <div> 
            <Navbar bg="dark" variant="dark" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img
                            src="./logo_utpg7.png"
                            width="136"
                            height="46"
                            className="d-inline-block align-top"
                            alt="App logo" />

                    </Navbar.Brand>
                    <Navbar.Brand href="#" className="cerrar_sesion"><i class="fas fa-house-user"></i>  BIENVENIDO </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='nav_eti'/>
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Administración de Arriendos</Offcanvas.Title>
                    </Offcanvas.Header>
                    
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        
                        <NavDropdown title="Acciones" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/"><i class="uil uil-clipboard-notes"></i> Inicio</NavDropdown.Item>
                            <NavDropdown.Item href="/crearSolicitud"><i class="uil uil-clipboard-notes"></i> Comprar</NavDropdown.Item>
                            <NavDropdown.Item href="/login"><i class="uil uil-clipboard-notes"></i> Iniciar Sesión</NavDropdown.Item>
                            
                        </NavDropdown>
                        
                        </Nav>
                        <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Buscar"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Buscar</Button>
                        </Form>
                    </Offcanvas.Body>
                    
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel">© Todos los derechos reservados</Offcanvas.Title>
                    </Offcanvas.Header>
                    </Navbar.Offcanvas>
                    
                </Container>
            </Navbar>
        </div>
    )
}
