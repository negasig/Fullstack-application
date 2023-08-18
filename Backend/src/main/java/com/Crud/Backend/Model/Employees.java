package com.Crud.Backend.Model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employees")
public class Employees {
	 public Employees() {
			
		}
	 @Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
Integer id;
	 
private String Firstname ;
private String Lastname;
private float  Salary;
private String Answer;



public Integer getId() {
	return id;
}


public void setId(Integer id) {
	this.id = id;

}




public Employees(Integer id, String firstname, String lastname, float salary, String answer) {
	super();
	this.id = id;
	Firstname = firstname;
	Lastname = lastname;
	Salary = salary;
	Answer = answer;
}

public String getFirstname() {
	return Firstname;
}
public void setFirstname(String firstname) {
	Firstname = firstname;
}
public String getLastname() {
	return Lastname;
}
public void setLastname(String lastname) {
	Lastname = lastname;
}
public float getSalary() {
	return Salary;
}
public void setSalary(float salary) {
	Salary = salary;
}
public String getAnswer() {
	return Answer;
}
public void setAnswer(String answer) {
	Answer = answer;
}
}