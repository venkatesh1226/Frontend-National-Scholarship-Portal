import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ten-det',
  templateUrl: './ten-det.component.html',
  styleUrls: ['./ten-det.component.css']
})
export class TenDetComponent implements OnInit {

  eligiblity:string='';
  regEmail!:string;
    rollno!:string;
    board!:string;
    passYear!:string;
    perObtain!:string;

  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }

}
