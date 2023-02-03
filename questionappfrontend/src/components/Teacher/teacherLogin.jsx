import React from 'react'
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const singInTeacher = () => {
    
    return (
        <>
       <Navbar></Navbar>
<div className="containerr">
           <div className="row">
                <div className="col-md-6 offset-md-3"> 
                    <div className="card">
                        <div className="card-header text-center fs-3">
                            <div className='image  text-center'>
                            <img className='img' src="simge.jpg" />
                            </div>
                        </div> 
                        <div className="card-body">
                            <form className="form" >
                                <div className="mb-3">
                                    <label>email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Şifre</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    />
                                </div>
                               
                                    <button className="buttonLogin">Sing In</button>
                                    <Link to="/singUpTeacher" className="buttonRegister">Sing Up</Link>  
                               
                            </form>
                        </div>    
                     </div>
                </div>
            </div>
        </div>  
        </>      
    )

  }
  export default singInTeacher