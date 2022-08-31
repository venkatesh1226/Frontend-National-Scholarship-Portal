import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { OtherDetails } from 'src/app/other-details';
// import { OtherDetailsService } from 'src/app/other-details.service';

@Component({
  selector: 'app-oth-det',
  templateUrl: './oth-det.component.html',
  styleUrls: ['./oth-det.component.css']
})
export class OthDetComponent implements OnInit {
  regEmail!:string;
  isDis!:string;
  typeDis!:string;
  percent!:string;
  mar!:string;
  prof!:string;
  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }
 
   
}
