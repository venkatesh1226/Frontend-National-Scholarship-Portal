import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwelthDetails } from 'src/app/twelth-details';
import { TwelthDetailsService } from 'src/app/twelth-details.service';

@Component({
  selector: 'app-twel-det',
  templateUrl: './twel-det.component.html',
  styleUrls: ['./twel-det.component.css']
})
export class TwelDetComponent implements OnInit {
  regEmail!:string;
  rollno!:string;
  board!:string;
  passYear!:string;
  perObtain!:string;
  constructor(private myrouter:Router, private twe:TwelthDetailsService) { }

  ngOnInit(): void {
  }
  twelthDetails:TwelthDetails=new TwelthDetails();
  saveTwelthDetails(twelthDetailsForm:any){
    this.twelthDetails=twelthDetailsForm.value;
    console.log(twelthDetailsForm.value);
    console.log(this.twelthDetails);
    this.twe.addTwelthDetails(this.twelthDetails).subscribe(
      (data: any)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/FeeDetails']);
      },
      (error: any)=>{
         console.log(error)
      }
      )
   }
}
