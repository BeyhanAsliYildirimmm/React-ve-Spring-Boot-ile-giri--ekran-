package com.example.questionSolutionApplication.controllers;

import com.example.questionSolutionApplication.entity.Student;
import com.example.questionSolutionApplication.services.StudentService;
import com.example.questionSolutionApplication.services.StudentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    StudentServiceImpl studentServiceImpl;
    @PostMapping("/save")
    public ResponseEntity<Student> studentAdd(@RequestBody Student student){
        return new ResponseEntity<Student>(studentServiceImpl.saveStudent(student),HttpStatus.CREATED);
    }
    @GetMapping("/login/{email}/{password}")
    public  int StudentLogin(@PathVariable("email")String email,@PathVariable("password")String password){
        int flag =studentServiceImpl.loginStudent(email,password);
        if(flag==0){
            return 0;
        }
        return flag;
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Student>> getAllStudents(){
        return new ResponseEntity<List<Student>>(studentServiceImpl.getAllStudents(),HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable int id){
        return new ResponseEntity<Student>(studentServiceImpl.getStudentById(id),HttpStatus.OK);
    }
    @GetMapping("/delete/{id}")
    public  ResponseEntity<String> deleteStudent(@PathVariable int id){

        studentServiceImpl.deleteStudent(id);
        return new ResponseEntity<String>("Delete Sucessfully",HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable int id,@RequestBody Student student)
    {
        return  new ResponseEntity<Student>(studentServiceImpl.updateStudent(id,student),HttpStatus.OK);
    }
}
