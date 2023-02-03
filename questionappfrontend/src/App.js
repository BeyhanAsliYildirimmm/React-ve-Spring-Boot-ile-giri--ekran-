import './App.css';
import Register from './components/Student/Register';
import Login from './components/Student/Login';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import TeacherLogin from './components/Teacher/teacherLogin';
import TeacherRegister from './components/Teacher/teacherRegister';
import Profile from './components/Profile/Profile';
function App() {
  return (
    <div className="App">
    
   <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/studentRegister' element={<Register />}/>
    <Route path='/singInStudent' element={<Login />}/>
    <Route path='/singInTeacher' element={<TeacherLogin />}/>
    <Route path='/singUpTeacher' element={<TeacherRegister />}/>
   </Routes>
    </div>
  );
}

export default App;
