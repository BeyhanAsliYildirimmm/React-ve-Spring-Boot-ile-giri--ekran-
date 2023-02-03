import React,{ useState } from "react";
import {Link,Navigate,useNavigate} from 'react-router-dom';
import studentService from "../Service/student.service";
import './studentStyle.css';
import Navbar from "../Navbar/Navbar";

const SingInStudent = () =>{
    
    const [studentLogin,setStudentLogin]=useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
      
        const value = e.target.value;
        setStudentLogin({...studentLogin, [e.target.name]: value });
    }

    const submitStudent =(e)=>{
       
        e.preventDefault();
       
        studentService.loginStudent(studentLogin.email,studentLogin.password);  
       
    };
    return(
        <>
        <Navbar></Navbar>
        <div className="containerr">
           <div className="row">
                <div className="col-md-6 offset-md-3"> 
                    <div className="card">
                        <div className="card-header text-center fs-3">
                            <div className='image'>
                            <img className='img' src="simge.jpg" />
                            </div>
                        </div> 
                        <div className="card-body">
                            <form onSubmit={(e) => submitStudent(e)} >
                                <div className="mb-3">
                                    <label>email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={studentLogin.email}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Şifre</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={studentLogin.password}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                               
                                <button type="submit" className="buttonLoginn">Sing In</button>
                                
                                <Link to="/StudentRegister" className="buttonRegisterr">Sing Up</Link>
                                
                            </form>
                        </div>    
                     </div>
                </div>
            </div>
        </div> 
    </>       
    );
};
export default SingInStudent;