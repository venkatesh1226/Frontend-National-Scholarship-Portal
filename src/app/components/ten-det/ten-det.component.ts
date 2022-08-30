import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenthDetails } from 'src/app/tenth-details';
import { TenthDetailsService } from 'src/app/tenth-details.service';

@Component({
  selector: 'app-ten-det',
  templateUrl: './ten-det.component.html',
  styleUrls: ['./ten-det.component.css']
})
export class TenDetComponent implements OnInit {

  eligiblity:string='';
  regEmail!:string;
    rollno!:string;
    board!:string;
    passYear!:string;
    perObtain!:string;

  constructor(private myrouter:Router,private ten:TenthDetailsService) { }

  ngOnInit(): void {
  }

  tenthDetails:TenthDetails = new TenthDetails();
  saveTenthDetails(tenthDetailsForm:any){
    this.tenthDetails=tenthDetailsForm.value;
    console.log(tenthDetailsForm.value);
    console.log(this.tenthDetails);
    this.ten.addTenthDetails(this.tenthDetails).subscribe(
      (data: any)=>{
        console.log(data);
        console.log("Persisted");
        this.myrouter.navigate(['/TwelthDetails']);
      },
      (error: any)=>{
         console.log(error)
      }
      )
   }


}
