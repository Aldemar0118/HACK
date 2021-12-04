import React, { useState } from 'react';

import {Offcanvas} from 'react-bootstrap'

//Imagenes
import dept_1 from '../../assets/images/apartamentos/dept_4.jpg';

import Caro from '../carrusel_popup/Caro_popup_4'


export default function Popup_Caru_Cards() {

  /** Apartamento */

  const [show, setShow] = useState(false);
   
  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    
    
    if (currentClass === 'modal-card') {
      return;
    }

    setShow(false);
  };
  
  const handleModalOpen = () => {
    setShow(true);
  };



    return (
        <div className="row nosotros">

        <div className="App">
          
          <div
            hidden={!show}  
          >
            <div
              className="modal-background"
              
            >
              <div className="row modal-card_popup">
              
                <div class="col-6">
                  <img class="img-fluid" src={dept_1} alt=""/>
                  <div>
                    <h3>Reputación</h3>
                    <div className="estrella_popup">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                <Offcanvas.Header onClick={handleModalClose} closeButton style={{height: '20px'}}>
                        <h3 className="titu_nombre" >Vino Rojo</h3>
                        <div></div>
                    </Offcanvas.Header>
                    <hr/>
                  <p className="info_persona">Sector Nororiente, Neiva Área 87 m² </p>
                  <p className="info_persona">Habitación: 3 - Baño: 2 - Estracto: 6 </p>
                  <h5>Edificacion de 4torres y solo 2aptos por piso ubicado sobre via 
                    cerrada y transito de solo residentes. Piso en madera laminada, sala 
                    comedor, cocina integral abierta tipo americano, 3 alcobas con baño 
                    en la principal, balcon con hermosa vista sobre la ciudad y 
                    parqueadero cubierto. </h5>
                  
                  <Caro/>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6" style={{color: 'white'}}>
                    <a class="btn" onClick={handleModalOpen}>Información</a>
          </div>
          
        </div>

    </div>
    )
}
  