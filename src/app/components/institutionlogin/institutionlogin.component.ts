import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/CurrentUser';
import { InstituteReg } from 'src/app/Models/instituteReg';
import { login } from 'src/app/Models/login';
import { InstituteLoginServiceService } from 'src/app/services/logins/institute-login-service.service';

@Component({
  selector: 'app-institutionlogin',
  templateUrl: './institutionlogin.component.html',
  styleUrls: ['./institutionlogin.component.css']
})
export class InstitutionloginComponent implements OnInit {
  user:CurrentUser = CurrentUser.Instance;
  userId!: string;
  password!: string;
  role: string = "INSTITUTE";
  login!: login;
  constructor(private route:Router,private serve:InstituteLoginServiceService) { }

  ngOnInit(): void {
  }
  userLogin(){
    this.validate();
    this.fill();
    this.serve.loginUser(this.login).subscribe( (data:InstituteReg)=>{
      alert("Logged in Successfully")
      this.user.setInstitute(data);
      this.navigate();
      }, error=>("Incorrect Username or Password"));

  }
  fill() { 
    this.login = {
      userId: this.userId,
    password: this.password,
    role:this.role
    }
  }
  validate() { }
  navigate() {
    this.route.navigate(["../"])
  }
}
