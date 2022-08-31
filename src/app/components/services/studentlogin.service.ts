import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/app/Models/login';
import { std_regi } from 'src/app/Models/std_regi';
import { Studentlogin } from 'src/app/studentlogin';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {

 
private baseUrl="http://localhost:8008";
  constructor(private httpClient: HttpClient) { }


  loginUser(user:login):Observable<std_regi>{
    console.log(user+" ")

  return this.httpClient.post<std_regi>(this.baseUrl+"/login-student",user);
  }

  logout(): Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.baseUrl + "/logout");
  }
}
