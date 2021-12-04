import React, { useState } from 'react';
import '../App.css';

//Imagenes
import Danny from '../assets/images/speakers/danny.jpg';
import Andres from '../assets/images/speakers/andres.jpg';
import William from '../assets/images/speakers/william.jpg';
import Santiago from '../assets/images/speakers/speaker1.jpg';
import Jeff from '../assets/images/speakers/speaker3.jpg';



export default function Nosotros() {

  /** William */

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

  /** Danny */

  const [showDanny, setShowDanny] = useState(false);
   
  const handleModalClose_Danny = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    }
    
    setShowDanny(false);
  };
  
  const handleModalOpen_Danny = () => {
    setShowDanny(true);
  };
  
  /** Andres */

  const [showAndres, setShowAndres] = useState(false);
   
  const handleModalClose_Andres = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    }
    
    setShowAndres(false);
  };
  
  const handleModalOpen_Andres = () => {
    setShowAndres(true);
  };

  /** Santiago */

  const [showSantiago, setShowSantiago] = useState(false);
   
  const handleModalClose_Santiago = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    }
    
    setShowSantiago(false);
  };
  
  const handleModalOpen_Santiago = () => {
    setShowSantiago(true);
  };

  /** Jefferson */

  const [showJefferson, setShowJefferson] = useState(false);
   
  const handleModalClose_Jefferson = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    }
    
    setShowJefferson(false);
  };
  
  const handleModalOpen_Jefferson = () => {
    setShowJefferson(true);
  };



    return (
        <div className="row nosotros">
          <div className="App">
          <div
            hidden={!showDanny}  
          >
            <div
              className="modal-background"
              onClick={handleModalClose_Danny}
            >
              <div className="row modal-card">
                <div class="col-6">
                  <img class="img-fluid" src={Danny} alt=""/>
                </div>
                <div class="col-6">
                <h3 className="titu_nombre">Danny Yulieth Campos</h3>
                  <hr/>
                  <p className="info_persona">Informacion aqui</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
              <div class="ts-speaker">
                <div class="speaker-img">
                    <img class="img-fluid" src={Danny} alt=""/>
                  
                    <button
                      className="button"
                      onClick={handleModalOpen_Danny}  
                      class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                      <i class="fas fa-plus"></i>
                    </button>
                            
                </div>
                <div class="ts-speaker-info">
                    <h3 class="ts-title"><a href="#">Danny Campos</a></h3>
                    <p>
                      Neiva, Huila
                    </p>
                </div>
              </div>
          </div>
          
        </div>

        <div className="App">
          <div
            hidden={!showAndres}  
          >
            <div
              className="modal-background"
              onClick={handleModalClose_Andres}
            >
              <div className="row modal-card">
                <div class="col-6">
                  <img class="img-fluid" src={Andres} alt=""/>
                </div>
                <div class="col-6">
                <h3 className="titu_nombre">Andres Camacho</h3>
                  <hr/>
                  <p className="info_persona">Informacion aqui</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
              <div class="ts-speaker">
                <div class="speaker-img">
                    <img class="img-fluid" src={Andres} alt=""/>
                  
                    <button
                      className="button"
                      onClick={handleModalOpen_Andres}  
                      class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                      <i class="fas fa-plus"></i>
                    </button>
                            
                </div>
                <div class="ts-speaker-info">
                    <h3 class="ts-title"><a href="#">Andres Camacho</a></h3>
                    <p>
                      Armenia, Quindío
                    </p>
                </div>
              </div>
          </div>
          
        </div>

        <div className="App">
          <div
            hidden={!showJefferson}  
          >
            <div
              className="modal-background"
              onClick={handleModalClose_Jefferson}
            >
              <div className="row modal-card">
                <div class="col-6">
                  <img class="img-fluid" src={Jeff} alt=""/>
                </div>
                <div class="col-6">
                <h3 className="titu_nombre">Jefferson Henao</h3>
                  <hr/>
                  <p className="info_persona">Informacion aqui</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
              <div class="ts-speaker">
                <div class="speaker-img">
                    <img class="img-fluid" src={Jeff} alt=""/>
                  
                    <button
                      className="button"
                      onClick={handleModalOpen_Jefferson}  
                      class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                      <i class="fas fa-plus"></i>
                    </button>
                            
                </div>
                <div class="ts-speaker-info">
                    <h3 class="ts-title"><a href="#">Jefferson Henao</a></h3>
                    <p>
                      Neiva, Huila
                    </p>
                </div>
              </div>
          </div>
          
        </div>

        <div className="App">
          <div
            hidden={!showSantiago}  
          >
            <div
              className="modal-background"
              onClick={handleModalClose_Santiago}
            >
              <div className="row modal-card">
                <div class="col-6">
                  <img class="img-fluid" src={Santiago} alt=""/>
                </div>
                <div class="col-6">
                <h3 className="titu_nombre">Santiago Moran</h3>
                  <hr/>
                  <p className="info_persona">Informacion aqui</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
              <div class="ts-speaker">
                <div class="speaker-img">
                    <img class="img-fluid" src={Santiago} alt=""/>
                  
                    <button
                      className="button"
                      onClick={handleModalOpen_Santiago}  
                      class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                      <i class="fas fa-plus"></i>
                    </button>
                            
                </div>
                <div class="ts-speaker-info">
                    <h3 class="ts-title"><a href="#">Santiago Moran</a></h3>
                    <p>
                      Neiva, Huila
                    </p>
                </div>
              </div>
          </div>
          
        </div>

        <div className="App">
          <div
            hidden={!show}  
          >
            <div
              className="modal-background"
              onClick={handleModalClose}
            >
              <div className="row modal-card">
                <div class="col-6">
                  <img class="img-fluid" src={William} alt=""/>
                </div>
                <div class="col-6">
                <h3 className="titu_nombre">William David Sabi</h3>
                  <hr/>
                  <p className="info_persona">Informacion aqui</p>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6">
              <div class="ts-speaker">
                <div class="speaker-img">
                    <img class="img-fluid" src={William} alt=""/>
                  
                    <button
                      className="button"
                      onClick={handleModalOpen}  
                      class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                      <i class="fas fa-plus"></i>
                    </button>
                            
                </div>
                <div class="ts-speaker-info">
                    <h3 class="ts-title"><a href="#">William Sabi</a></h3>
                    <p>
                      Neiva, Huila
                    </p>
                </div>
              </div>
          </div>
          
        </div>

    </div>
    )
}
  