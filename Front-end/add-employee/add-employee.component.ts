import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  constructor(private service: EmployeeServiceService){}

  addEmployee: Employee = new Employee();

  ngOnInit(): void{}

  save(){
    this.service.save(this.addEmployee).subscribe(data => {
      console.log(data);
    })
  }
  

}
