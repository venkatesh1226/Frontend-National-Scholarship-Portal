import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { InstitutionApiServiceService } from 'src/app/services/InstituteService/institution-api-service.service';
import { InstituteReg } from 'src/app/Models/instituteReg';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institutionregistration',
  templateUrl: './institutionregistration.component.html',
  styleUrls: ['./institutionregistration.component.css']
})
export class InstitutionregistrationComponent implements OnInit {
  instituteReg!: InstituteReg
  
  institutionCategory!: string;
  name!: string;
  instState!: string;
  instDistrict!: string;
  institutionCode!: string;
  email!: string;
  diseCode!: string;
  location!: string;
  institutionType!: string;
  affiliatedUnivState!: string;
  affiliatedUnivBoard!: string;
  startAdmitYear!: string;
  setPassword!: string;
  confirmPassword!: string;
  addressLine1!: string;
  addressLine2!: string;
  city!: string;
  state!: string;
  district!: string;
  pincode!: string;
  principleName!: string;
  mobileNumber!: string;
  telephone!: string;

  constructor(private FormBuilder: FormBuilder, private institutionApi: InstitutionApiServiceService, private route:Router) { }

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

    this.fill();

    this.institutionApi.register(this.instituteReg).subscribe(
      (data: InstituteReg) => {
        console.log("Success!")
        alert("Successfully Registered, Navigating to Login Page")
        this.navigate();
      },
      error => console.log("Error!", error)
    );

    alert("Institution  Added!!");


    console.log(this.form.value);
  }

  fill() {
    this.instituteReg = {
      institutionCategory: this.institutionCategory,
    name: this.name,
    instState: this.instState,
    instDistrict: this.instDistrict,
    institutionCode: this.institutionCode,
    email: this.email,
    diseCode: this.diseCode,
    location: this.location,
    institutionType: this.institutionType,
    affiliatedUnivState: this.affiliatedUnivState,
    affiliatedUnivBoard: this.affiliatedUnivBoard,
    startAdmitYear: this.startAdmitYear,
    setPassword: this.setPassword,
    confirmPassword: this.confirmPassword,
    addressLine1: this.addressLine1,
    addressLine2: this.addressLine2,
    city: this.city,
    state: this.state,
    district: this.district,
    pincode: this.pincode,
    principleName: this.principleName,
    mobileNumber: this.mobileNumber,
    telephone:this.telephone
    }
  }

  validate() {
    if (this.confirmPassword !== this.setPassword)
      alert("PASSWORD NOT MATCH");
  }
  navigate() {
    this.route.navigate(["../institutionlogin"]);
}

}