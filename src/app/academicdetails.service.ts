import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Academicdetails } from './academicdetails';

@Injectable({
  providedIn: 'root'
})
export class AcademicdetailsService {

  constructor(private myhttp:HttpClient) { }

  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAcademicDetails(){
    return this.myhttp.get(this.restUrl+"/AllAcademicDetails")
  }

  addAcademicDetails(add:Academicdetails){
    return this.myhttp.post(this.restUrl+"/AcademicDetails",add)
  }
  
}
