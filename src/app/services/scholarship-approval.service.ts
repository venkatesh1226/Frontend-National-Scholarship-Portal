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
  
  constructor(private http: HttpClient) {
    
  }
  
  getInstituteScholarships(code: string): Observable<Scholarship[]> { 
    return this.http.get<Scholarship[]>(this.URL + "/inst-scholarships/" + code);
  }
   

  getScholarships(role:string): Observable<Scholarship[]> { 
    
    //Example of calling rest api
    //return this.http.get<Scholarship[]>(URL)


    return this.http.get<Scholarship[]>(this.URL+"/scholarships/approval/"+role);
    
  }

  editApproval(s: Scholarship,role:string): Observable<Scholarship[]> { 
    var roleNum: number;
    if (role === 'NODAL') {
      roleNum = 2;
    }
    else if (role === 'MINISTRY') {
      roleNum = 3;
    }
    else
      roleNum = 1;
    console.log(this.URL + "/scholarships/status/" + s.id + "/" + roleNum);
    this.http.put<Scholarship>(this.URL + "/scholarships/status/" + s.id + "/"+roleNum, 
      s.scholarshipStatus.approvedByNodal
    ).subscribe((data: Scholarship) => { 
      console.log(data);
    })
    console.log("************");
    console.log(s.id);
    return this.getScholarships(role);
  }

}
