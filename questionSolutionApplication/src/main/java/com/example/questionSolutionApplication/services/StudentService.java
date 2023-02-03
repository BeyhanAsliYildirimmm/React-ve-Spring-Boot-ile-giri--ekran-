package com.example.questionSolutionApplication.services;

import com.example.questionSolutionApplication.entity.Student;

import java.util.List;


public interface StudentService {
    public Student saveStudent(Student student);
    public int loginStudent(String email,String password);
    public List<Student> getAllStudents();
    public Student getStudentById(int id);
    public  void deleteStudent(int id);
    public Student updateStudent(int id,Student student);
}
