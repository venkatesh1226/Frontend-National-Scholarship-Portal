import { Component, OnInit } from '@angular/core';
import { Studentlogin } from 'src/app/studentlogin';
import { StudentloginService } from '../services/studentlogin.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
   user:Studentlogin= new Studentlogin();
  constructor(private  studentloginservice:StudentloginService) { }

  ngOnInit(): void {
  }

  userLogin(){
    var result;
    console.log(this.user)
    
    result=this.studentloginservice.loginUser(this.user).subscribe ( data=>{
        alert("Logged in Successfully")
      }, error=>("Incorrect Username or Password"));

      console.log(result+"okay");
  }
}
