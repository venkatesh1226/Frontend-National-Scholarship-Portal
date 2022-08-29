import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeeDetails } from './fee-details';

@Injectable({
  providedIn: 'root'
})
export class FeeDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAllFeeDetails(){
    return this.myhttp.get(this.restUrl+"/AllFeeDetails")
  }

  addFeeDetails(fee:FeeDetails){
    return this.myhttp.post(this.restUrl+"/FeeDetails",fee)
  }
}
