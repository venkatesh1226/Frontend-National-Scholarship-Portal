import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(public parent: AppComponent) { }

  ngOnInit(): void {
  }

  logedin = this.parent.user.getStudent().name.toUpperCase();

}
