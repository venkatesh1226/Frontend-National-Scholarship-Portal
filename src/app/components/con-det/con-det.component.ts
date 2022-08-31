import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-con-det',
  templateUrl: './con-det.component.html',
  styleUrls: ['./con-det.component.css']
})
export class ConDetComponent implements OnInit {
  selectedValue: any
  regEmail!:string;
    state!:string;
    district!:string;
    taluka!:string;
    hNum!:string;
    sNum!:string;
    pin!:string;
  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
}
