import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicDetails } from './basic-details';

@Injectable({
  providedIn: 'root'
})
export class BasicDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getBasicDetails(){
    return this.myhttp.get(this.restUrl+"/AllBasicDetails")
  }

  addBasicDetails(add:BasicDetails){
    return this.myhttp.post(this.restUrl+"/BasicDetails",add)
  }
}
