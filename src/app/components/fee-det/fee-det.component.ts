import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fee-det',
  templateUrl: './fee-det.component.html',
  styleUrls: ['./fee-det.component.css']
})
export class FeeDetComponent implements OnInit {
  regEmail!:string;
  addFee!:string;
  tuiFee!:string;
  othFee!:string;
  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
 
}
