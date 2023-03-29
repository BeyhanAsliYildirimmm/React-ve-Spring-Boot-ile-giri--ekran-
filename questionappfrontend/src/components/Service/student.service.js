import axios from "axios";

const BASE_API_URL="http://localhost:8080/student";

class StudentService{
 
    saveStudent(student){
     
     const response= axios.post(BASE_API_URL+"/save",student)
     .then(res =>  res.status === 201 ? true : false)
     .catch(err => false);
     return response;
    }
    async loginStudent(email,password){

      const response = await axios.get(BASE_API_URL+"/login/"+email+"/"+password)
      .then(res =>  res.data === 1 ? true : false)
      .catch(err => false);
      return response;
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