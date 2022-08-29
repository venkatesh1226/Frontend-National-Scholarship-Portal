import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactDetails } from './contact-details';

@Injectable({
  providedIn: 'root'
})
export class ContactDetailsService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:9099/NationalScholarshipPortal/Scheme";

  getAllContactDetails(){
    return this.myhttp.get(this.restUrl+"/AllContactDetails")
  }

  addContactDetails(con:ContactDetails){
    return this.myhttp.post(this.restUrl+"/ContactDetails",con)
  }
}
