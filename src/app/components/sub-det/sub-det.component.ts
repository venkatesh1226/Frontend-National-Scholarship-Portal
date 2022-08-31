import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-det',
  templateUrl: './sub-det.component.html',
  styleUrls: ['./sub-det.component.css']
})
export class SubDetComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
 
   
}
