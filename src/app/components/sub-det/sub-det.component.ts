import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitDetails } from 'src/app/submit-details';
import { SubmitDetailsService } from 'src/app/submit-details.service';

@Component({
  selector: 'app-sub-det',
  templateUrl: './sub-det.component.html',
  styleUrls: ['./sub-det.component.css']
})
export class SubDetComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor(private myrouter:Router,private sub:SubmitDetailsService) { }

  ngOnInit(): void {
  }
  submitDetails:SubmitDetails = new SubmitDetails();
  saveSubmitDetails(submitDetailsForm:any){
    this.submitDetails=submitDetailsForm.value;
    console.log(submitDetailsForm.value);
    console.log(this.submitDetails);
    alert("Successfully submitted");
    this.sub.addSubmitDetails(this.submitDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/Display']);
      },
      (error)=>{
         console.log(error)
      }
      )
   }
}
