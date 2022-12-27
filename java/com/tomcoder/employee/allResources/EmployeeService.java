package com.tomcoder.employee.allResources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepo repository;
	
	public List<Employee> findAll(){
		List<Employee> employeeList = repository.findAll();
		return employeeList;
	}
	
	public Employee save(Employee employee) {
		Employee newEmployee = repository.save(employee);
		return newEmployee;
	}

}
