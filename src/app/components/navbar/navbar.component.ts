import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { StudentloginService } from '../services/studentlogin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(public  parent: AppComponent,private serve:StudentloginService,private route:Router) { }

  ngOnInit(): void {
  }

  logout() { 
    this.serve.logout().subscribe( (data:Boolean)=>{
      alert("Logged out Successfully")
      this.parent.user.setLogin( {
        'userId': 'NONE',
        'password': 'NONE',
        'role':'NONE'
        
      });
      this.navigate();
      }, error=>("Try Again"));
  }

  navigate() { 
    this.route.navigate(["../"])
  }

}
