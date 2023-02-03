package com.example.questionSolutionApplication.services;
import com.example.questionSolutionApplication.entity.Teacher;
import com.example.questionSolutionApplication.repos.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public class TeacherServiceImpl implements TeacherService {
   @Autowired
    private TeacherRepository teacherRepo;


    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepo.save(teacher);
    }

    @Override
    public List<Teacher> getAllTeachers() {
        return teacherRepo.findAll();
    }

    @Override
    public Teacher getTeacherById(int id) {
        return teacherRepo.findById(id).get();
    }

    @Override
    public void deleteTeacher(int id) {
        Teacher teacher=teacherRepo.findById(id).get();
        if(teacher!=null)
            teacherRepo.delete(teacher);
    }

    @Override
    public Teacher updateTeacher(int id, Teacher teacher) {
       Teacher oldTeacher = teacherRepo.findById(id).get();
        if (oldTeacher != null) {
            teacher.setTeacher_id(id);
            return teacherRepo.save(teacher);
        }
        return null;
    }
}