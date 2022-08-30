import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubmitDetails } from './submit-details';

@Injectable({
  providedIn: 'root'
})
export class SubmitDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAllSubmitDetails(){
    return this.myhttp.get(this.restUrl+"/AllSubmitDetails")
  }

  addSubmitDetails(sub:SubmitDetails){
    return this.myhttp.post(this.restUrl+"/SubmitDetails",sub)
  }
}
