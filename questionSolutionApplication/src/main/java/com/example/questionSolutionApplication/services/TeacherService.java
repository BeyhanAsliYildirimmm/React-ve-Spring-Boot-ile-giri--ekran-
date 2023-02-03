package com.example.questionSolutionApplication.services;

import com.example.questionSolutionApplication.entity.Student;
import com.example.questionSolutionApplication.entity.Teacher;

import java.util.List;

public interface TeacherService {
    public Teacher saveTeacher(Teacher teacher);
    public List<Teacher> getAllTeachers();
    public Teacher getTeacherById(int id);
    public  void deleteTeacher(int id);
    public Teacher updateTeacher(int id,Teacher teacher);
}
