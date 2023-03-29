import axios from "axios";

const BASE_API_URL="http://localhost:8080/teacher";

class teacherService{
    saveTeacher(teacher){
        return axios.post(BASE_API_URL+"/save",teacher);
      }
      async loginTeacher(email,password){
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

    updateStudent(id,teacher){

        return axios.post(BASE_API_URL+"/update/"+id,teacher)
    }
  
}
export default new teacherService();