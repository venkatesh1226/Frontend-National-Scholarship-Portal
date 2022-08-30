import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { std_regi } from './Models/std_regi';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {
  //private baseURL = 'http://localhost:8081/api/v1';
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<std_regi[]>{
    return this.httpClient.get<std_regi[]>("http://localhost:8081/api/v1/AllStudentRegistration")
  };

  createStudent(student: std_regi): Observable<Object>{
    return this.httpClient.post("http://localhost:8081/api/v1/StudentRegistration",student);
  }

}
