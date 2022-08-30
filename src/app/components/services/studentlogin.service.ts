import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studentlogin } from 'src/app/studentlogin';

@Injectable({
  providedIn: 'root'
})
export class StudentloginService {
private baseUrl="http://localhost:8008/user/login";
  constructor(private httpClient: HttpClient) { }


  loginUser(user:Studentlogin):Observable<object>{
    console.log(user)
  //return this.httpClient.post(`${this.baseUrl}`,user);
  return this.httpClient.post("http://localhost:8008/user/login",user);
  }
}
