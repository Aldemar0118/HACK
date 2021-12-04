import React, {useState} from 'react'
import Axios from 'axios'
import swal from 'sweetalert2'
export default function CrearAdmin() {

    const [nombre,setNombre]=useState('')
    const [correo,setCorreo]=useState('')
    const [contrasena,setContrasena]=useState('')

    const registroAdmin = async(e)=>{
        e.preventDefault();
        const Administrador={nombre,correo,contrasena}
        const respuesta = await Axios.post('/admin/crear', Administrador)
        console.log(respuesta)
        const mensaje = respuesta.data.mensaje

        if(mensaje==='El correo ya existe'){

            swal.fire({
                icon:'error',
                title: mensaje,
                showConfirmButton:false,
                timer: 1500
            })
        }

       
        else if(mensaje!=='Usuario Admin creado'){

            swal.fire({
                icon:'error',
                title: mensaje,
                showConfirmButton:false,
                timer: 1500
            })
        }

        

        
        else{
            // const token = respuesta.data.token
            // const nombre = respuesta.data.nombre
            // const idAdmin = respuesta.data.id
            // sessionStorage.setItem('token', token)
            // sessionStorage.setItem('nombre', nombre)
            // sessionStorage.setItem('idAdmin', idAdmin)

            
            swal.fire({
                icon:'success',
                title: 'Usuario Administrador creado',
                showConfirmButton:false,
                timer: 1500
            })

            setTimeout(()=>{
                window.location.href='/login'
            },1600)
        }

        
    }

    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-7 mx-auto">
                        <div className="card">
                            <br />
                            <div className="container text-center fa-5x">
                                <i className="fas fa-user-plus"></i>
                            </div>
                            <br />
                            <div className="card-header bg-info text-center">
                                <h4>Registrarse como administrador</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registroAdmin}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre Completo</label>
                                            <input type="text"className="form-control required" onChange={(e)=>setNombre(e.target.value)}/>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Correo electronico</label>
                                            <input type="email"className="form-control required" onChange={(e)=>setCorreo(e.target.value)}/>
                                        </div>

                                        <div className="col-md-6">
                                            <label>Contraseña</label>
                                            <input type="password"className="form-control required" onChange={(e)=>setContrasena(e.target.value)}/>
                                        </div>

                                        
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-outline-info">
                                        <span class="fa fa-save"></span> Registrarse
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
