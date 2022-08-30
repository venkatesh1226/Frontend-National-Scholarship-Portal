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

  editApproval(s: Scholarship): Observable<Scholarship[]> { 
    var body = {
      "status":s.scholarshipStatus.approvedByNodal
    }
    console.log(
    this.http.put<Scholarship[]>(this.URL + "/scholarships/status/" + s.id + "/2", 
      s.scholarshipStatus.approvedByNodal
    ));
    return this.getScholarships();
  }

}
