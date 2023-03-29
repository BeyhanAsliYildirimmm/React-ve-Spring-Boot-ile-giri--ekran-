import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import teacherService from '../Service/teacher.service';
const SingInTeacher = () => {
    const navigate = useNavigate();
    const [teacherLogin,setTeacherLogin]=useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
      
        const value = e.target.value;
        setTeacherLogin({...teacherLogin, [e.target.name]: value });
    }
    const submitStudent =(e)=>{
       
        e.preventDefault();
       const answer= teacherService.loginTeacher(teacherLogin.email,teacherLogin.password);  
       alert (answer);
       if(answer !=null){
        navigate('/sayfa');
       }
       else{
        alert("e-posta ve şifrenizi kotrol ediniz.");
       }
       
    };
    return (
        <>
       <Navbar></Navbar>
<div className="containerr">
           <div className="row">
             <video src='/videos/back.mp4' autoPlay loop muted />
                <div className="col-md-6 offset-md-3"> 
                    <div className="card">
                   
                      <a  href="/singInStudent" >ÖĞRENCİ</a>     
                 
                        <div className="card-body">
                            <form className="form" onSubmit={(e) => submitStudent(e)} >
                                <div className="mb-3">
                                    <label id='email'>email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={teacherLogin.email}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label id='password'>Şifre</label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={teacherLogin.password}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                               <div className='navig'>
                                    <button type="submit" className="buttonLogin">Sing In</button>
                                    <Link to="/singUpTeacher" className="buttonRegister">Sing Up</Link>  
                                </div>
                            </form>
                        </div>    
                     </div>
                </div>
            </div>
        </div>  
        </>      
    )

  }
  export default SingInTeacher