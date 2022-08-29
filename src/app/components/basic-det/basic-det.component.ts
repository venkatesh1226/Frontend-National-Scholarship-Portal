import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicDetails } from 'src/app/basic-details';
import { BasicDetailsService } from 'src/app/basic-details.service';

@Component({
  selector: 'app-basic-det',
  templateUrl: './basic-det.component.html',
  styleUrls: ['./basic-det.component.css']
})
export class BasicDetComponent implements OnInit {
  regEmail!:string;
    adhar!:string;
    relig!:string;
    commu!:string;
    fName!:string;
    mName!:string;
    income!:string
  route: any;
  constructor(private myrouter:Router,private bas:BasicDetailsService) {}

  ngOnInit(): void {
  }

  basicDetails:BasicDetails = new BasicDetails();

  saveBasicDetails(basicDetailsForm:any){
   this.basicDetails=basicDetailsForm.value;
   console.log(basicDetailsForm.value);
   console.log(this.basicDetails);
   this.bas.addBasicDetails(this.basicDetails).subscribe(
     (data: any)=>{
       console.log(data);
       console.log("Persisted");
       this.myrouter.navigate(['/applyscheme/acadamicdetail']);
     },
     (error: any)=>{
        console.log(error)
     }
     )
  }

}
function go() {
  throw new Error('Function not implemented.');
}

