import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/app/Models/login';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl="http://localhost:8008";
  constructor(private httpClient: HttpClient) { }
  loginUser(user:login):Observable<login>{
  return this.httpClient.post<login>(this.baseUrl+"/login-admin",user);
  }
}
