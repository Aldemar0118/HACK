import React,{useState, useEffect} from 'react'
import {Navbar, Container,Nav,NavDropdown,Form, Button, Offcanvas, FormControl} from 'react-bootstrap'
import {Link} from 'react-router-dom';

// import ReactPlayer from 'react-player'

//import video from '../assets/lv_0_20211129164520.mp4'


export default function Barra() {

    const [show,setShow]= useState(true)
    const [RegistrarAdmin,setRegistrarAdmin]= useState(false)
    const [menu,setMenu]= useState(false)

    useEffect(() => {
        
        if(sessionStorage.getItem('token')){
            setMenu(true)
            setShow(false)
            setRegistrarAdmin(true)
        }
        
    }, []);

    const salir= ()=>{
        sessionStorage.clear()
        window.location.href="/"
    }

    const verSolicitudes= ()=>{
        window.location.href="/verSolicitudes"
    }

    const crearSolicitud= ()=>{
        window.location.href="/crearSolicitud"
    }

    const crearAdmin= ()=>{
        window.location.href="/crearAdmin"
    }

    const index= ()=>{
        window.location.href="/index"
    }


    return (
        <div>
            <Navbar bg="dark" variant="dark" expand={show}>
                <Container fluid>
                    <Navbar.Brand href="#">
                    <img
                            src="./logo_utpg7.png"
                            width="136"
                            height="46"
                            className="d-inline-block align-top"
                            alt="App logo" />

                    </Navbar.Brand>
                    <Link hidden={RegistrarAdmin} style={{ color:'#FFF', textDecoration:'none' }} to="/crearAdmin"> <i className="register_icon" class="uil uil-user-plus"></i> <Navbar.Brand>   Registrarse </Navbar.Brand> </Link>
                    <Navbar.Brand hidden={show} href="#" onClick={()=>salir()} to="/" className="cerrar_sesion"><i class="uil uil-signout"></i>  Cerrar sesión </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                   
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title hidden={show} id="offcanvasNavbarLabel">Bienvenido, {sessionStorage.getItem('nombre')}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Item > Acciones</Nav.Item>
                        <Link to="/"style={{ color:'black', textDecoration:'none' }}> <i className="register_icon" class="uil uil-clipboard-notes"></i> <Navbar.Brand> Inicio</Navbar.Brand> </Link>
                        <Link onClick={()=>verSolicitudes()} to="/verSolicitudes"style={{ color:'black', textDecoration:'none' }}> <i className="register_icon" class="uil uil-clipboard-notes"></i> <Navbar.Brand> Ver Solicitudes</Navbar.Brand> </Link>
                        <Link onClick={()=>crearSolicitud()} to="/crearSolicitud"style={{ color:'black', textDecoration:'none' }}> <i className="register_icon" class="uil uil-clipboard-notes"></i> <Navbar.Brand> Crear Solicitud</Navbar.Brand> </Link>
                        <Link onClick={()=>crearAdmin()} to="/crearAdmin"style={{ color:'black', textDecoration:'none' }}> <i className="register_icon" class="uil uil-clipboard-notes"></i> <Navbar.Brand> Crear ADMIN</Navbar.Brand> </Link>
                        
                        
                        </Nav>

                        {/* <ReactPlayer url={require('../assets/lv_0_20211129164520.mp4')} width='100%' height='100%' controls playing/> */}
                        
                        
                    </Offcanvas.Body>
                    <Offcanvas.Header>
                    <Navbar.Brand hidden={show} href="#" onClick={()=>salir()} to="/" className="cerrar_sesion"><i class="uil uil-signout"></i>  Cerrar sesión </Navbar.Brand>
                    </Offcanvas.Header>
                    <Offcanvas.Header>
                        <Offcanvas.Title id="offcanvasNavbarLabel">© Todos los derechos reservados</Offcanvas.Title>
                    </Offcanvas.Header>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}