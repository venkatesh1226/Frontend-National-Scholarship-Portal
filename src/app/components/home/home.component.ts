import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Studentregis } from 'src/app/studentregis';
import { StudentregistrationService } from 'src/app/services/StudentRegistrationService/studentregistration.service';
import { std_regi } from 'src/app/Models/std_regi';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  state!: string;
  district!:string;
  name!:string;
  dob!:string;
    gender!:string;
    mobile!:string;
    email!:string;
    instCode!:string;
    adhar!:string;
    ifsc!:string;
    bankAcc!:string;
    bankName!:string;
    password!:string;
  cPassword!: string;
  stdReg!: std_regi;
  success: boolean=false;
  constructor(private serve:StudentregistrationService,private router:Router) { }


  ngOnInit(): void {
  }
  form=new FormGroup({
    'stateofDomicile':new FormControl('',Validators.required),
    'dist':new FormControl('',Validators.required),
    'name':new FormControl('',Validators.required),
    'dob':new FormControl('',Validators.required),
    'gender':new FormControl('',Validators.required),
    'mobileNumber':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'institutionCode':new FormControl('',Validators.required),
    'aadharNumber':new FormControl('',Validators.required),
    'ifsc':new FormControl('',Validators.required),
    'accountno':new FormControl('',Validators.required),
    'bankname':new FormControl('',Validators.required),
    'setPassword':new FormControl('',Validators.required),
    'confirmPassword':new FormControl('',Validators.required)
  });

  student:Studentregis=new Studentregis();
  saveStudent()
  {
    this.fill();
    this.validate();
    console.log(this.stdReg.state)
    console.log(this.state)
      this.student = JSON.parse(localStorage.getItem('student')!);
      console.log(this.form.value)
      console.log(this.student)

      this.serve.addStudent(this.stdReg).subscribe(
        (data: std_regi)=>{
          console.log(data.id);
          console.log(data.name);
          alert("Registration done!!")
          this.navigate();
          this.success = true;
        },
        (error: any)=>
        {
          console.log(error)
        }
      )
  }

  fill() { 
    this.stdReg = {
      state: this.state,
      district: this.district,
      name: this.name,
      dob: this.dob,
      gender: this.gender,
      mobile: this.mobile,
      email: this.email,
      instCode: this.instCode,
      aadhar: this.adhar,
      ifsc: this.ifsc,
      bankAcc: this.bankAcc,
      bankName: this.bankName,
      password: this.password
      
    }
    console.log("********");
    console.log(this.stdReg);
    console.log("*********");
  }

  validate(){
    //todo validate all fields
  }

  navigate() { 
    this.router.navigate(["../studentlogin"]);
  }

}
