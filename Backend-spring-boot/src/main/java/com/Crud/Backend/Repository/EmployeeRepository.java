package com.Crud.Backend.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Crud.Backend.Model.Employees;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Integer>{

}