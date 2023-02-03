package com.example.questionSolutionApplication.services;

import com.example.questionSolutionApplication.DBUtil;
import com.example.questionSolutionApplication.entity.Student;
import com.example.questionSolutionApplication.repos.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


@Service
public class StudentServiceImpl implements StudentService {
    Connection connection;
    int flag=0;
    public StudentServiceImpl() throws SQLException{
        connection= DBUtil.getConnection();
    }
    @Autowired
   private StudentRepository studentRepo;

    @Override
    public Student saveStudent(Student student) {
        return studentRepo.save(student);
    }

    @Override
    public int loginStudent(String email, String password) {
        try {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM STUDENT WHERE email='" + email + "'");
            ResultSet rs=statement.executeQuery();
            while (rs.next()) {
                if(rs.getString(2).equals(email) && rs.getString(5).equals(password)){
                    flag=1;


                }
                else{
                    flag=0;
                }
            }

        }catch (SQLException e){
            e.printStackTrace();
        }
        return flag;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepo.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        return studentRepo.findById(id).get();
    }

    @Override
    public void deleteStudent(int id) {
     Student student=studentRepo.findById(id).get();
     if(student!=null)
         studentRepo.delete(student);
    }

    @Override
    public Student updateStudent(int id, Student student) {
        Student oldStudent=studentRepo.findById(id).get();
        if(oldStudent !=null){
            student.setStudent_id(id);
            return studentRepo.save(student);
        }
        return null;
    }
}
