import React,{ useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import studentService from "../Service/student.service";
import './studentStyle.css';
import Navbar from "../Navbar/Navbar";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const SingInStudent = () =>{
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [studentLogin,setStudentLogin]=useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
      
        const value = e.target.value;
        setStudentLogin({...studentLogin, [e.target.name]: value });
    }
    const handleClose = () => setShow(false);
    const submitStudent =(e)=>{
     
        e.preventDefault();

      const cevap= studentService.loginStudent(studentLogin.email,studentLogin.password);
      cevap.then(function(value){
        
        if(value===true){
          value=false;
          navigate("/sayfa");
          
        }
        else if(value===false){
            setShow(true);
        }
      });
    };

    return(
        <>
        <Navbar></Navbar>
        <div className="containerr">
           <div className="row">
           <video src='/videos/back.mp4' autoPlay loop muted />
                <div className="col-md-6 offset-md-3"> 
                    <div className="card"> 
                    <div className="card-button">
                      <a id="yon" href="/singInTeacher" >ÖĞRETMEN</a>     
                    </div>
                        <div className="card-body">
                            <form onSubmit={(e) => submitStudent(e)} >
                                <div className="mb-3">
                                    <label id="email">email</label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={studentLogin.email}
                                    onChange={(e)=>handleChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label id="password">Şifre</label>
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

            <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kullanıcı adı veya şifreniz yanlış tekrar deneyiniz.!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>  
         
    );
   
};
export default SingInStudent;