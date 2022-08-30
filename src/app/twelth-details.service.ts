import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TwelthDetails } from './twelth-details';

@Injectable({
  providedIn: 'root'
})
export class TwelthDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAllTwelthDetails(){
    return this.myhttp.get(this.restUrl+"/AllTwelthDetails")
  }

  addTwelthDetails(twel:TwelthDetails){
    return this.myhttp.post(this.restUrl+"/TwelthDetails",twel)
  }
}
