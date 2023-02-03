import React, { useState } from "react";
import {Link} from 'react-router-dom';
import studentService from "../Service/student.service";
import './studentStyle.css';
import Navbar from "../Navbar/Navbar";
const AddStudent = () => {

    const [student,setStudent]=useState({
        fistName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
      
        const value = e.target.value;
        setStudent({...student, [e.target.name]: value });
    }

    const submitStudent =(e)=>{
       
        e.preventDefault();
       studentService.saveStudent(student);
    };
    return(
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
                            <form onSubmit={(e) => submitStudent(e)}>
                                <div className="mb-3">
                                    <label>Ad</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="fistName"
                                    value={student.fistName}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Soyad</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    value={student.lastName}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={student.email}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Şifre</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={student.password}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>

                                    <button type="submit" className="buttonLoginn">Sing Up</button>
                                   <Link to ="/singInStudent"  className="buttonRegisterr">Sing In </Link>
                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default AddStudent;