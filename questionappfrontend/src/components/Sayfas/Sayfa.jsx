import { Container, Grid } from "@material-ui/core";

import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';

import React, { useState,useRef } from "react";
import '../Sayfas/Sayfa.css';
import { CgProfile } from 'react-icons/cg';


        function ContainerOutsideExample() {
          const navigate = useNavigate();
          const[image,setImage]=useState(null);
          const inputRef = useRef();
          function handImage(e) {
            console.log(e.target.file)
            setImage(e.dataTransfer.image)
          }
          function handleClickIcon(){
            navigate("/frame");
          }
          return (
            <>
          
            <div className='frame'>
              <div>
                <Navbar className='navbar2' expand="lg" variant="light" bg="light">
                  <Container>
                 
                    <input type="file" 
                    multiple
                    onChange={(event) => setImage(event.target.image)}
                    hidden
                    ref={inputRef}
                     ></input>
                  <button onClick={ () => inputRef.current.click()}>Yükle</button>
                    <CgProfile className='customerProfile' onClick={handleClickIcon} />
                  </Container>
                </Navbar>
                <Container className="top_60">
        <Grid container spacing={7}>
           
            <Grid item xs>
              <div className="main_content">
              vbvbv
              </div>
            </Grid>
        </Grid>
      </Container>
              </div>
            </div>
        

       </>
          );
        }
        export default ContainerOutsideExample;
    
