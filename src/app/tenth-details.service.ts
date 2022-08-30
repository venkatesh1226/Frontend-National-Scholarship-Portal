import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TenthDetails } from './tenth-details';

@Injectable({
  providedIn: 'root'
})
export class TenthDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAllTenthDetails(){
    return this.myhttp.get(this.restUrl+"/AllTenthDetails")
  }

  addTenthDetails(ten:TenthDetails){
    return this.myhttp.post(this.restUrl+"/TenthDetails",ten)
  }
}
