import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { InstitutionApiServiceService } from 'src/app/institution-api-service.service';

@Component({
  selector: 'app-institutionregistration',
  templateUrl: './institutionregistration.component.html',
  styleUrls: ['./institutionregistration.component.css']
})
export class InstitutionregistrationComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder, private institutionApi: InstitutionApiServiceService) { }

  submitted = false;

  form! : FormGroup;

  ngOnInit(): void {
    // validations

    this.form = new FormGroup({
      institutionCategory : new FormControl('',Validators.required),
      name : new FormControl('',Validators.required),
      inststate :new FormControl('',Validators.required),
      instdistrict : new FormControl('',Validators.required),
      institutionCode : new FormControl('',Validators.required),
      email : new FormControl('',Validators.email),
      disecode : new FormControl('',Validators.required),
      location : new FormControl('',Validators.required),
      institutionType : new FormControl('',Validators.required),
      affilatedUniversityState : new FormControl('',Validators.required),
      affilatedUniversityBoardName : new FormControl('',Validators.required),
      yearFromWhichAdmissionStarted : new FormControl('',Validators.required),
      setPassword : new FormControl('',Validators.required),
      confirmPassword : new FormControl('',Validators.required),
      addressLine1 : new FormControl('',Validators.required),
      addressLine2 : new FormControl('',Validators.required),
      city : new FormControl('',Validators.required),
      state : new FormControl('',Validators.required),
      district : new FormControl('',Validators.required),
      pincode : new FormControl('',Validators.required),
      principleName : new FormControl('',Validators.required),
      mobileNumber : new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      telephone : new FormControl('',Validators.required),
    });


  }

  
allInstCategory :string [] = [
    "Government Institute ", 
    "Govt. Aided Institute ", 
    "Unaided Institute"
]

allState :string [] = [
  "Andra Pradesh",
  "Kerala",
  "Maharashtra",
  "West Bengal"
]

allInstType: string [] = [
  "Junior College",
  "Diploma College",
  "Under Graduate College",
  "Post Graduate College",
  "Ph.D. College"
]
  //Institution:Institution=new Institution();

  saveInstitution()
  {
    this.submitted = true;
    
    if(this.form.invalid)
    {
      alert("Please enter valid details!");
      return;
    }

    this.institutionApi.register(this.form.value).subscribe(
      response => console.log("Success!", response),
      error => console.log("Error!", error)
    );

    alert("Institution  Added!!");


    console.log(this.form.value);
  }


}