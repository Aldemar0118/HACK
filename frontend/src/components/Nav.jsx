import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setMenu(true);
    }
  }, []);

  const salir = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  const inicio = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand navbar-dark-blue bg-dark">
      <div className=" container-md">
        <Link className="navbar-brand" to="/" onClick={() => inicio()}>
          Inicio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {menu ? (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className='fas fa-user'>&nbsp;</i>
                  Bienvenido {sessionStorage.getItem("nombre")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => salir()}>
                  <i className='fas fa-user-times'>&nbsp;</i>
                  Salir
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
             <li className="nav-item">
               <Link className="nav-link" to="/login">
                 <i className='fas fa-user-plus'>&nbsp;</i>
                 Ingreso Administrador
               </Link>
             </li>
           </ul>
          </div>
          
          
         </div>
       
        )}
      </div>
    </nav>
  );
}
