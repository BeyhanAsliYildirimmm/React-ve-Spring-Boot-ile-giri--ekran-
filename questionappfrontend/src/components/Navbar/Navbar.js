import React,{useState} from "react";
import {FaBars} from "react-icons/fa";
import {ImCross} from "react-icons/im";
import "../Navbar/Navbar-Style.css";

const Navbar = () =>{

  const [Mobile,setMobile] = useState(false)
return(

<nav className="navbar">
  <div className="nav">
<img className="logo" src="logo.png" alt="logo"/>
<div className="navv">
<ul className={Mobile ? "nav-links-mobile": 'nav-links'} onClick={() => setMobile(false)}>
 <li><a href="/">Ana Sayfa</a></li>
 <li><a href="/singInStudent">Öğrenci Giriş Yap/Üye Ol</a></li>
 <li><a href="/singInTeacher">Öğretmen Giriş Yap/Üye Ol</a></li>
</ul>
</div>
<button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
  {Mobile? <ImCross /> :  <FaBars />}
</button>
</div>
</nav>

)
}
export default Navbar