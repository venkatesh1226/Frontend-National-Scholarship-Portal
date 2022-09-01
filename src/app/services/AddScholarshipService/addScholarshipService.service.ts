import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scholarship } from 'src/app/Models/Scholarship/Scholarship';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipAddService {

  constructor(private myhttp: HttpClient) { }
  restURL: string = "http://localhost:8008";
  
  addScholarship(s:Scholarship):Observable<Scholarship>{ 
    return this.myhttp.post<Scholarship>(this.restURL + "/apply", s);
  }

  getCurrentStudentsScholarship(id:number):Observable<Scholarship[]> {
    return this.myhttp.get<Scholarship[]>(this.restURL + "/scholarships/"+id);

  }
}
