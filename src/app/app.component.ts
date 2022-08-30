import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'National-Scholarship-Portal-Frontend';
  name = "";
  
  constructor(
    private route: Router,
  ) {
    console.log(route);
   }

  ngOnInit() {
    this.name = this.route.url;
    
  }

  isOk(path: string) { 
    return this.route.url === path.trim();
  }
}
