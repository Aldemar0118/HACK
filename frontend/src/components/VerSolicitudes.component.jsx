import MaterialTable from 'material-table'
import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import swal from 'sweetalert2'
import {Modal,Button} from 'react-bootstrap'

import Barra from './Barra.component';


export default function VerSolicitudes() {

    const[solicitudes, setSolicitudes]= useState([])
    const[idSolicitud, setIdSolicitud]= useState('')
    const[nombre, setNombre] = useState('')
    const[apellidos, setApellidos] = useState('')
    const[identificacion, setIdentificacion] = useState('')
    const[correo, setCorreo] = useState('')
    const[telefono, setTelefono] = useState('')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    useEffect(()=>{

        listarSolicitudes()
    },[])



    const listarSolicitudes= async()=>{

        
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/solicitud/listarSolicitudes/',{
            headers:{'autorizacion': token}
        })

        console.log(respuesta)
        setSolicitudes(respuesta.data)
    }

    const obtenerSolicitud = async(idParametro)=>{

        setShow(true)
        const id = idParametro
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.get('/solicitud/listar/'+id,{
            headers:{'autorizacion':token}
        })

        console.log(respuesta.data)

        setIdSolicitud(respuesta.data._id)
        setNombre(respuesta.data.nombre)
        setApellidos(respuesta.data.apellidos)
        setIdentificacion(respuesta.data.identificacion)
        setCorreo(respuesta.data.correo)
        setTelefono(respuesta.data.telefono)

    }

    const ActualizarSolicitud = async(e)=>{

        e.preventDefault();
        const id = idSolicitud
        const token = sessionStorage.getItem('token')
        const solicitudActualizada={
            nombre,
            apellidos,
            identificacion,
            correo,
            telefono
        }

        const respuesta = await Axios.put('/solicitud/actualizar/'+id,solicitudActualizada,{
            headers:{'autorizacion':token}
        })
        const mensaje= respuesta.data.mensaje
        obtenerSolicitud()

        swal.fire({
            icon:'success',
            title: 'solicitud de renta actualizada',
            showConfirmButton:false,
            timer: 1500
        })
    }

    const eliminar = async(id)=>{
        
        const token = sessionStorage.getItem('token')
        const respuesta = await Axios.delete('solicitud/eliminar/'+id,{
            headers:{'autorizacion':token}
        })

        const mensaje= respuesta.data.mensaje
        

        swal.fire({
            icon:'success',
            title: 'Has eliminado la solicitud',
            showConfirmButton:false,
            timer: 1500
        })
        listarSolicitudes()
    }

    const data = solicitudes.map((solicitud)=>({
        id: solicitud._id,
        nombre:solicitud.nombre,
        apellidos:solicitud.apellidos,
        identificacion:solicitud.identificacion,
        correo:solicitud.correo,
        telefono:solicitud.telefono,

    }))
    
  return (
      
        <div className="container"> <Barra/>
        <br />
        <MaterialTable
        title="Solicitudes de renta recibidas"
        columns={[
            { title: 'ID', field: 'id' },
            { title: 'NOMBRE', field: 'nombre' },
            { title: 'APELLIDOS', field: 'apellidos' },
            { title: 'IDENTIFICACIÓN', field: 'identificacion' },
            { title: 'CORREO', field: 'correo' },
            { title: 'TELEFONO', field: 'telefono' }
        
        ]}
        data={data}      
        options={{
            search: true,
            actionsColumnIndex:-1,
            initialPage:1
        }}

        actions={[
            {
                icon:'delete',
                tooltip:'Eliminar solicitud',
                 onClick:(event,rowData)=>eliminar(rowData.id)
            },
            {
                icon:'edit',
                tooltip:'Editar solicitud',
                 onClick:(event,rowData)=>obtenerSolicitud(rowData.id)
            }
        ]}
        />

        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>¡Aquí puedes editar una solictud de renta!</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card">
                            <div className="container text-center fa-5x">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="card-header bg-info text-center">
                                <h4>Actualizar una solicitud de venta</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={'guardar'}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setNombre(e.target.value)} value={nombre} />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Apellidos</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setApellidos(e.target.value)} value={apellidos} />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Número Identificación</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setIdentificacion(e.target.value)} value={identificacion}/>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Correo</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setCorreo(e.target.value)} value={correo}/>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Telefono</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setTelefono(e.target.value)} value={telefono} />
                                        </div>
                                    </div>
                                    <br />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={ActualizarSolicitud}>
                Editar solicitud
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
    
  )
}

        
