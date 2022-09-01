import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { login } from 'src/app/Models/login';
import { AdminServiceService } from 'src/app/services/logins/admin-service.service';

@Component({
  selector: 'app-nodalofficerlogin',
  templateUrl: './nodalofficerlogin.component.html',
  styleUrls: ['./nodalofficerlogin.component.css']
})
export class NodalofficerloginComponent implements OnInit {

  userId!: string;
  password!: string;
  role="NODAL"

  constructor(private serve: AdminServiceService,private parent:AppComponent,private route:Router) { }

  ngOnInit(): void {
  }

  userLogin()
  {
    this.serve.loginUser({
      userId: this.userId,
      password: this.password,
      role:this.role
    }).subscribe((data: login) => { 
      if (data === null)
        alert("Email or password is wrong");
      else { 
        this.parent.user.setLogin(data);
        this.navigate();
      }
    }, (error: any)=>{ 
      console.log(error);
      alert("Email or password is wrong");
    })

  }

  navigate() { 
    this.route.navigate(["../"]);
  }
}
