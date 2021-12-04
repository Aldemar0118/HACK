import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import CrearSolicitud from './components/CrearSolicitud'
import VerSolicitudes from './components/VerSolicitudes.component';
import CrearAdmin from './components/CrearAdmin.component';
import Login from './components/Login.component'
import Index from './components/index'

import Home from './components/homepage'

import PrivateRoute from './routes/PrivateRoute'

function App() {
  return (
    <Router>
        <Route path='/'exact component={Home}/>
        <Route path='/login'exact component={Login}/>
        <PrivateRoute path='/principal'exact component={Index}/>
        <Route path='/crearSolicitud'exact component={CrearSolicitud}/>
        <PrivateRoute path='/verSolicitudes'exact component={VerSolicitudes}/>
        <Route path='/crearAdmin'exact component={CrearAdmin}/>
    </Router>
    
  );
}

export default App;
