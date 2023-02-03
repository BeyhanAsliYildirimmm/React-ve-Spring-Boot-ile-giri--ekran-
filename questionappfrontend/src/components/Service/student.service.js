import axios from "axios";
const BASE_API_URL="http://localhost:8080/student";
class StudentService{
    
    saveStudent(student){
      return axios.post(BASE_API_URL+"/save",student);
    }
    async loginStudent(email,password){

      console.log(email);
      console.log(password);
     const response= await axios.get(BASE_API_URL+"/login/"+email+"/"+password);
    
      if(response.data==1){

        alert('Tebrikler')

        }
        else if(response.data==0){

         alert("Böyle Bir Kullanıcı Bulunamadı.")

        } 
  }

    getAllStudent(){
        return axios.get(BASE_API_URL+"/getAll");
    }

    getStudentById(id){
      return axios.get(BASE_API_URL+"/"+id);
    }

    deleteStudent(id){
        return axios.get(BASE_API_URL+"/delete/"+id)
    }

    updateStudent(id,student){

        return axios.post(BASE_API_URL+"/update/"+id,student)
    }
}

export default new StudentService();