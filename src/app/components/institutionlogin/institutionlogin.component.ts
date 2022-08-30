import { Component, OnInit } from '@angular/core';
import { Institutionlogin } from 'src/app/institutionlogin';

@Component({
  selector: 'app-institutionlogin',
  templateUrl: './institutionlogin.component.html',
  styleUrls: ['./institutionlogin.component.css']
})
export class InstitutionloginComponent implements OnInit {
  user:Institutionlogin= new Institutionlogin();
  constructor() { }

  ngOnInit(): void {
  }
  userLogin(){
    console.log(this.user)
  }
}
