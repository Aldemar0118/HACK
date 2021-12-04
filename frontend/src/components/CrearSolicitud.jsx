import React,{useState} from 'react'
import Axios from 'axios'
import swal from 'sweetalert2'

export default function CrearAdmin() {
    const[nombre, setNombre] = useState('')
    const[apellidos, setApellidos] = useState('')
    const[identificacion, setIdentificacion] = useState('')
    const[correo, setCorreo] = useState('')
    const[telefono, setTelefono] = useState('')

    const guardar = async(e)=>{
        e.preventDefault()
        const cliente={
            nombre,
            apellidos,
            identificacion,
            correo, 
            telefono
        }

        if(nombre===""){

            swal.fire({
                icon:'error',
                title:'¿No has escrito tu nombre!',
                showConfirmButton:false,
                timer:1500
            })
        }

        else if(apellidos===""){

            swal.fire({
                icon:'error',
                title:'¿No has escrito tus apellidos!',
                showConfirmButton:false,
                timer:1500
            })

            
        }

        else if(identificacion===""){

            swal.fire({
                icon:'error',
                title:'¿No has escrito tu numero de identificacion!',
                showConfirmButton:false,
                timer:1500
            })
        }

        else if(correo===""){

                swal.fire({
                    icon:'error',
                    title:'¿No has escrito tus correo electronico!',
                    showConfirmButton:false,
                    timer:1500
                })
    
                
        }

        else if(telefono===""){

            swal.fire({
                icon:'error',
                title:'¿No has escrito tu numero telefonico!',
                showConfirmButton:false,
                timer:1500
            })

            
        }


        else{

            const respuesta= await Axios.post('/solicitud/rentar',cliente)
            const mensaje = respuesta.data.mensaje
            console.log(mensaje)

            swal.fire({
                icon:'success',
                title:'La solicitud de renta ha sido enviada',
                showConfirmButton:false,
                timer:1500
            })

            e.target.reset();
            setNombre("");
            setApellidos("");
            setIdentificacion("");
            setCorreo("");
            setTelefono("");
            
            setTimeout(()=>{
                window.location.href='/'
            },1600)
        }
    }
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card">
                            <div className="container text-center fa-5x">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <div className="card-header bg-info text-center">
                                <h4>Solicitar renta del inmueble</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={guardar}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setNombre(e.target.value)} />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Apellidos</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setApellidos(e.target.value)} />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Número Identificación</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setIdentificacion(e.target.value)}/>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Correo</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setCorreo(e.target.value)} />
                                        </div>

                                        <div className="col-md-6">
                                            <label>Telefono</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setTelefono(e.target.value)} />
                                        </div>
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-outline-info">
                                        <span class="fa fa-save"></span>  Enviar solicitud
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
