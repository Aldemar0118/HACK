import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "react-bootstrap";
import {Card, Button,CardImg} from "react-bootstrap";

import Popup_Caru_1 from './popup/Popup_Caru_1'
import Popup_Caru_2 from './popup/Popup_Caru_2'
import Popup_Caru_3 from './popup/Popup_Caru_3'
import Popup_Caru_4 from './popup/Popup_Caru_4'
import Popup_Caru_5 from './popup/Popup_Caru_5'
import Popup_Caru_6 from './popup/Popup_Caru_6'
import Popup_Caru_7 from './popup/Popup_Caru_7'
import Popup_Caru_8 from './popup/Popup_Caru_8'

import { Nav } from "react-bootstrap";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="zona_CC">
        <Slider {...settings} style={{ width: '1200px' }} className="caru_cards_multi">
        <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg" />
                        <Card.Body>
                            <Card.Title>Loma de la Cruz</Card.Title>
                            <Card.Text>
                            Gran vista de la ciudad. Fácil acceso. Uno de los últimos sitios con 
                             precios bajos en el sector Sur-oriente de Medellin. Unidad completa.
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_1/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg" />
                        <Card.Body>
                            <Card.Title>Casa Blanca</Card.Title>
                            <Card.Text>
                            Apartamento en laureles, tercer piso sin ascensor, tres parqueaderos 
                            independientes, util grande, camaras de seguridad, alcoba principal 
                            con balcon
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_2/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/046.jpg" />
                        <Card.Body>
                            <Card.Title>Alejandría</Card.Title>
                            <Card.Text>
                            Apartamento en laureles, tercer piso sin ascensor, tres parqueaderos, util grande, 
                            camaras de seguridad, alcoba principal con balcon, vestier, baño.
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_3/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/054.jpg" />
                        <Card.Body>
                            <Card.Title>Vino Rojo</Card.Title>
                            <Card.Text>
                            Apartamento en unidad cerrada en el sector de las Palmas, excelente vista panoramica de la ciudad, 
                            ubicación exclusiva con entorno muy natural, tranquilo y seguro.
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_4/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/039.jpg" />
                        <Card.Body>
                            <Card.Title>Butique Norte</Card.Title>
                            <Card.Text>
                            Apartamento en venta ubicado en El Poblado sector Loma Los Gonzalez en el sur
                            de la ciudad de Cali, zona tranquila y segura para toda persona
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_5/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/034.jpg" />
                        <Card.Body>
                            <Card.Title>Zona Rosal</Card.Title>
                            <Card.Text>
                            Sector los Balsos entre la Tv Inferior y Superior, 
                            cerca a supermercados como la Vaquita y Consumo, Colegio Sta Maria del Rosario y rutas de transporte. 
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_6/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/050.jpg" />
                        <Card.Body>
                            <Card.Title>Banquillo WS</Card.Title>
                            <Card.Text>
                            Gran vista de la ciudad. Fácil acceso. Uno de los últimos sitios con 
                             precios bajos en el sector Sur-oriente de Medellin. Unidad completa.
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_7/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

          <div>
        <Card style={{ width: '18rem' }}>
                        <CardImg className="img_slider" variant="top" src="https://mdbcdn.b-cdn.net/img/new/standard/city/049.jpg" />
                        <Card.Body>
                            <Card.Title>Portal Azúl</Card.Title>
                            <Card.Text>
                            Apartamento en laureles, tercer piso sin ascensor, tres parqueaderos, util grande, 
                            camaras de seguridad, alcoba principal con balcon, vestier, baño.
                            </Card.Text>
                            <Nav.Link href="/crearSolicitud" ><a class="btn">Rentar</a></Nav.Link>

                            <Popup_Caru_8/>
                            {/* <Button className="rentar_button">Rentar</Button>
                            <Button className="nfo_button">Ver más información</Button> */}
                        </Card.Body>
                    </Card>
          </div>

        </Slider>

      </div>
    );
  }
}
