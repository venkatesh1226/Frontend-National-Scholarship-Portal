import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scholarship } from '../Models/Scholarship/Scholarship';
@Injectable({
  providedIn: 'root'
})
export class ScholarshipApprovalService {
//REST API URL
  private URL="http://localhost:8008"

  scholarships: Scholarship[] = []
  constructor(private http:HttpClient) { }

  getScholarships(): Observable<Scholarship[]> { 
    
    //Example of calling rest api
    //return this.http.get<Scholarship[]>(URL)


    return this.http.get<Scholarship[]>(this.URL+"/scholarships");
    
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

}
