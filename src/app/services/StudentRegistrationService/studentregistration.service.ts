import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { std_regi } from 'src/app/Models/std_regi';
import { Studentregis } from '../../studentregis';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  response:any;
  constructor(private myhttp:HttpClient) { }
restURL:string="http://localhost:8008";
getStudent():Observable<std_regi[]>
{
  return this.myhttp.get<std_regi[]>(this.restURL+"/students");
};
addStudent(add:std_regi):Observable<std_regi>
{
  console.log(add);
  return this.myhttp.post<std_regi>(this.restURL+"/add-student",add,httpOptions)
}

}