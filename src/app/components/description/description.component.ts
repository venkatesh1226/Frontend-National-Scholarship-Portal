import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

  }

  isOk(path: string) { 
    return this.route.url.trim() == path.trim();
  }

}
