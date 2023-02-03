package com.example.questionSolutionApplication.repos;

import com.example.questionSolutionApplication.entity.Student;
import com.example.questionSolutionApplication.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher,Integer> {
}
