import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicdetailsService } from 'src/app/academicdetails.service';

@Component({
  selector: 'app-acad-det',
  templateUrl: './acad-det.component.html',
  styleUrls: ['./acad-det.component.css']
})
export class AcadDetComponent implements OnInit {
  academicDetails: any;
  regEmail!:string;
    insName!:string;
    preClass!:string;
    mode!:string;
    classStart!:string;
    university!:string;
    prevClass!:string;
    prevClassPer!:string;

  constructor(private myrouter:Router,private aca:AcademicdetailsService) { }

  ngOnInit(): void {
  }

  saveAcademicDetails(academicDetailsForm:any){
    this.academicDetails=academicDetailsForm.value;
    console.log(academicDetailsForm.value);
    console.log(this.academicDetails);
    this.aca.addAcademicDetails(this.academicDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/TenthDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
} 
   

}
