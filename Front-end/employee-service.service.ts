import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url = "http://localhost:81/employee/api"

  constructor(private http: HttpClient) { }

  findAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)
  }

  save(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.url, employee)
  }
}
