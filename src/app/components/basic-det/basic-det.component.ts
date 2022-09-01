import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-det',
  templateUrl: './basic-det.component.html',
  styleUrls: ['./basic-det.component.css']
})
export class BasicDetComponent implements OnInit {
  regEmail!:string;
    adhar!:string;
    relig!:string;
    commu!:string;
    fName!:string;
    mName!:string;
    income!:string
  route: any;
  constructor(private myrouter:Router) {}

  ngOnInit(): void {
  }

}
function go() {
  throw new Error('Function not implemented.');
}

