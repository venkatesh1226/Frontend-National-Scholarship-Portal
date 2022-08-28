import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scholarship } from '../Models/Scholarship';
@Injectable({
  providedIn: 'root'
})
export class ScholarshipApprovalService {
//REST API URL
  private URL=""

  scholarships: Scholarship[] = []
  constructor(private http:HttpClient) { }

  getScholarships(): Observable<Scholarship[]> { 
    
    //Example of calling rest api
    //return this.http.get<Scholarship[]>(URL)

    //Just for testing purpose upon creating rest api remove below line and use above code.
    this.fillDummyData();
    return of(this.scholarships);
  }

  editApproval(s: Scholarship): Observable<any> { 
    for (let i = 0; i < this.scholarships.length;i++) { 
      if (this.scholarships[i].id === s.id) { 
        this.scholarships[i] = s;
        break;
      }
    }
    return of(this.scholarships);
  }

  private fillDummyData() { 
    var s1: Scholarship = {
      id: 1,
      details: "Student name is .....",
      instituteApproval: true,
      nodalApproval: false,
      ministryApproval: false
    }
    this.scholarships.push(s1);
    this.scholarships.push(structuredClone(s1))
    this.scholarships.push(structuredClone(s1))
    this.scholarships.push(structuredClone(s1))
    this.scholarships.push(structuredClone(s1))
    this.scholarships.push(structuredClone(s1))

  }
}
