import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OtherDetails } from 'src/app/other-details';
import { OtherDetailsService } from 'src/app/other-details.service';

@Component({
  selector: 'app-oth-det',
  templateUrl: './oth-det.component.html',
  styleUrls: ['./oth-det.component.css']
})
export class OthDetComponent implements OnInit {
  regEmail!:string;
  isDis!:string;
  typeDis!:string;
  percent!:string;
  mar!:string;
  prof!:string;
  constructor(private myrouter:Router,private oth:OtherDetailsService) { }

  ngOnInit(): void {
  }
  otherDetails:OtherDetails = new OtherDetails();
  saveOtherDetails(otherDetailsForm:any){
    this.otherDetails=otherDetailsForm.value;
    console.log(otherDetailsForm.value);
    console.log(this.otherDetails);
    this.oth.addOtherDetails(this.otherDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/ContactDetails']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }
}
