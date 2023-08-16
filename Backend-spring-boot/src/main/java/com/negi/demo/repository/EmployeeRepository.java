package com.negi.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.negi.demo.modell.Employees;

@Repository
public interface EmployeeRepository extends JpaRepository<Employees, Integer>{

}
