import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studentregis } from './studentregis';

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  response:any;
  constructor(private myhttp:HttpClient) { }
restURL:string="http://localhost:9099/NationalSchlarshipPortal/Student";
getStudent():Observable<any>
{
  return this.myhttp.get(this.restURL+"/AllStudentRegistred");
};
addStudent(add:Studentregis):Observable<any>
{
  console.log(add);
  return this.myhttp.post(this.restURL+"/StudentRegistration",add)
}

}