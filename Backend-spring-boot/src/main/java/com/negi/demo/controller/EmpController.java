package com.negi.demo.controller;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import java.util.Optional;

import javax.swing.CellEditor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.negi.demo.modell.Employees;
import com.negi.demo.repository.EmployeeRepository;
@SpringBootApplication
@RequestMapping("api")
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@ResponseBody()
public class EmpController {
	@Autowired
	EmployeeRepository emprepo;
	@GetMapping("/List")
	public String shome() {
		return "Api";
	}

	@GetMapping("/ListEmployee")
	public List<Employees> showall() {
		return emprepo.findAll();
}
	@GetMapping("/ListEmployee/{id}")
	public Optional<Employees> showById(@PathVariable int id) {
		return emprepo.findById(id) ;
}
	@PostMapping("/AddEmployee")
	public Object AddEmployee(@RequestBody Employees empl) {
		return emprepo.save(empl);
}
	@DeleteMapping("/DeleteEmployee/{id}")
	public Optional<List<Employees>> DeletEmp(@PathVariable int id) {
		emprepo.deleteById(id);
		return Optional.ofNullable(emprepo.findAll());
}
	@PutMapping("/updateEmployee/{id}")
	public  Object updateemployee(@RequestBody Employees em, @PathVariable int id) {

		Employees ce=emprepo.findById(id).get();
		
		ce.setFirstname(em.getFirstname());
		ce.setLastname(em.getLastname());
		ce.setSalary(em.getSalary());
		return emprepo.save(ce);
		
		}
		
	@PostMapping("/Test")
	public  Employees Display(@RequestBody Employees Answer) {

		Employees ee= new Employees();
		
		return ee;
		
	}
		
		
}
	
	
	
	

