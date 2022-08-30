import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeDetails } from 'src/app/fee-details';
import { FeeDetailsService } from 'src/app/fee-details.service';

@Component({
  selector: 'app-fee-det',
  templateUrl: './fee-det.component.html',
  styleUrls: ['./fee-det.component.css']
})
export class FeeDetComponent implements OnInit {
  regEmail!:string;
  addFee!:string;
  tuiFee!:string;
  othFee!:string;
  constructor(private myrouter:Router,private fee:FeeDetailsService) { }

  ngOnInit(): void {
  }
  feeDetails:FeeDetails = new FeeDetails();
  saveFeeDetails(feeDetailsForm:any){
    this.feeDetails=feeDetailsForm.value;
    console.log(feeDetailsForm.value);
    console.log(this.feeDetails);
    this.fee.addFeeDetails(this.feeDetails).subscribe(
      (data: any)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/OtherDetails']);
      },
      (error: any)=>{
         console.log(error)
      }
      )
   }
}
