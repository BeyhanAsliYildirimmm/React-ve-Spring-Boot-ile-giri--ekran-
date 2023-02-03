package com.example.questionSolutionApplication.controllers;
import com.example.questionSolutionApplication.entity.Teacher;
import com.example.questionSolutionApplication.services.TeacherServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    TeacherServiceImpl teacherServiceImpl ;
    @PostMapping("/save")
    public ResponseEntity<Teacher> teacherAdd(@RequestBody Teacher teacher){
        return new ResponseEntity<Teacher>(teacherServiceImpl.saveTeacher(teacher), HttpStatus.CREATED);
    }
    @GetMapping("/getAll")
    public ResponseEntity<List<Teacher>> getAllStudents(){
        return new ResponseEntity<List<Teacher>>(teacherServiceImpl.getAllTeachers(),HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Teacher> getTeacherById(@PathVariable int id){
        return new ResponseEntity<Teacher>(teacherServiceImpl.getTeacherById(id),HttpStatus.OK);
    }
    @GetMapping("/delete/{id}")
    public  ResponseEntity<String> deleteTeacher(@PathVariable int id){

        teacherServiceImpl.deleteTeacher(id);
        return new ResponseEntity<String>("Delete Sucessfully",HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<Teacher> updateStudent(@PathVariable int id,@RequestBody Teacher teacher)
    {
        return  new ResponseEntity<Teacher>(teacherServiceImpl.updateTeacher(id,teacher),HttpStatus.OK);
    }
}
