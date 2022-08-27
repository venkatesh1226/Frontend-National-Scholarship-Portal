import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-institutionregistration',
  templateUrl: './institutionregistration.component.html',
  styleUrls: ['./institutionregistration.component.css']
})
export class InstitutionregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    institutionCategory : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    inststate :new FormControl('',Validators.required),
    instdistrict : new FormControl('',Validators.required),
    institutionCode : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
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
    mobileNumber : new FormControl('',Validators.required),
    telephone : new FormControl('',Validators.required)
  });

  saveInstitution()
  {
    
  }


}