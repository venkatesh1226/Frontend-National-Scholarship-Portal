import { Component, OnInit } from '@angular/core';
import { Nodalofficerlogin } from 'src/app/nodalofficerlogin';

@Component({
  selector: 'app-nodalofficerlogin',
  templateUrl: './nodalofficerlogin.component.html',
  styleUrls: ['./nodalofficerlogin.component.css']
})
export class NodalofficerloginComponent implements OnInit {
  user:Nodalofficerlogin= new Nodalofficerlogin();
  constructor() { }

  ngOnInit(): void {
  }

  userLogin()
  {
    console.log(this.user)
  }
}
