import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituteReg } from 'src/app/Models/instituteReg';
import { login } from 'src/app/Models/login';

@Injectable({
  providedIn: 'root'
})
export class InstituteLoginServiceService {

  private baseUrl="http://localhost:8008";
  constructor(private httpClient: HttpClient) { }

  loginUser(user:login):Observable<InstituteReg>{
    console.log(user+" ")

  return this.httpClient.post<InstituteReg>(this.baseUrl+"/login-institute",user);
  }

  logout(): Observable<Boolean>{
    return this.httpClient.delete<Boolean>(this.baseUrl + "/logout");
  }
}
