import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent {

  constructor(private service: EmployeeServiceService){}

  'allEmployee': Employee[];
  ngOnInit(): void{
    this.service.findAll().subscribe(request =>{
      this.allEmployee = request;
    })

  }

}
