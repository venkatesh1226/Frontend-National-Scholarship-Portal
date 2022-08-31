import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twel-det',
  templateUrl: './twel-det.component.html',
  styleUrls: ['./twel-det.component.css']
})
export class TwelDetComponent implements OnInit {
  regEmail!:string;
  rollno!:string;
  board!:string;
  passYear!:string;
  perObtain!:string;
  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
}
