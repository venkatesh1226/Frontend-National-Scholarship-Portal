import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/CurrentUser';
import { login } from 'src/app/Models/login';
import { std_regi } from 'src/app/Models/std_regi';
import { Studentlogin } from 'src/app/studentlogin';
import { StudentloginService } from '../services/studentlogin.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  user:CurrentUser = CurrentUser.Instance;
  id!: string;
  pass!: string;
  role: string = "STUDENT";
  studentlogin!: login;
  constructor(private  studentloginservice:StudentloginService,private router:Router) { }

  ngOnInit(): void {
  }

  userLogin() {
    console.log(this.id + " " + this.pass);
    var result;
    this.fill();
    console.log(this.studentlogin.userId)
    
    this.studentloginservice.loginUser(this.studentlogin).subscribe ( (data:std_regi)=>{
      alert("Logged in Successfully")
      this.user.setStudent(data);
      this.navigate();
      console.log(data.id + " " + data.name + " " + data.email);
      
      }, error=>("Incorrect Username or Password"));
  }
  fill() { 
    this.studentlogin = {
      userId: this.id,
      password: this.pass,
      role:this.role
    }
  }
  navigate() {
    this.router.navigate(["../student-home"]);
  }
}
