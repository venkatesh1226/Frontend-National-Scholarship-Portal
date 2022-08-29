import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtherDetails } from './other-details';

@Injectable({
  providedIn: 'root'
})
export class OtherDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAllOtherDetails(){
    return this.myhttp.get(this.restUrl+"/AllOtherDetails")
  }

  addOtherDetails(oth:OtherDetails){
    return this.myhttp.post(this.restUrl+"/OtherDetails",oth)
  }
}
