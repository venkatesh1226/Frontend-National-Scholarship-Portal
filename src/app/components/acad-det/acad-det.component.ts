import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acad-det',
  templateUrl: './acad-det.component.html',
  styleUrls: ['./acad-det.component.css']
})
export class AcadDetComponent implements OnInit {
  academicDetails: any;
  regEmail!:string;
    insName!:string;
    preClass!:string;
    mode!:string;
    classStart!:string;
    university!:string;
    prevClass!:string;
    prevClassPer!:string;

  constructor(private myrouter:Router) { }

  ngOnInit(): void {
  }


}
