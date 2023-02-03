package com.example.questionSolutionApplication.entity;
import jakarta.persistence.*;
import org.hibernate.annotations.Comment;
import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "Student")

public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Integer student_id;
    private String fistName;
    private String lastName;
    private String email;
    private String password;
    public Integer getStudent_id() {
        return student_id;
    }

    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    public String getFistName() {
        return fistName;
    }

    public void setFistName(String fistName) {
        this.fistName = fistName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



}
