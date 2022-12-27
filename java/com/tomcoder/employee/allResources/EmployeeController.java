package com.tomcoder.employee.allResources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/employee/api")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	@GetMapping
	public ResponseEntity<List<Employee>> findAll(){
		List<Employee> allEmployees = service.findAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Employee> save(@RequestBody Employee employee){
		return new ResponseEntity<>(service.save(employee), HttpStatus.CREATED);
	}

}
