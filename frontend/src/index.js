import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios'

import "./css/bootstrap.min.css";

import "./css/formu-arriendo.css";
import "./css/responsive.css";
import "./css/sesion.css";
import "./css/style.css";
import "./css/admin.css";

import "./css/ventana.css";
import "./css/carousel.css";

// Axios.defaults.baseURL='http://localhost:4000'
Axios.defaults.baseURL='https://utpg7-backend.herokuapp.com'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


