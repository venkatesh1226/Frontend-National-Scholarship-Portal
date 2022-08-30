import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Scholarship } from 'src/app/Models/Scholarship/Scholarship';

@Component({
  selector: 'app-view-scholarship',
  templateUrl: './view-scholarship.component.html',
  styleUrls: ['./view-scholarship.component.css']
})
export class ViewScholarshipComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }

}
