import axios from "axios";

const BASE_API_URL="http://localhost:8080/teacher";

class teacherService{
    saveTeacher(teacher){
        return axios.post(BASE_API_URL+"/save",teacher);
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