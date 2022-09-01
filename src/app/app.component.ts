import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CurrentUser } from './CurrentUser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:CurrentUser = CurrentUser.Instance;
  title = 'National-Scholarship-Portal-Frontend';
  //myimage:string="assets/images/scholarship.jpg"
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
  isRoleOk(role: string) { 

    if (role === 'NONE') {
      console.log(this.user.getLogin());
      return this.user.getLogin() === undefined||this.user.getLogin().role==='NONE';
    
    }
    if (this.user.getLogin() === undefined ||this.user.getLogin().role==='NONE')
      return false;
    return this.user.getLogin().role === role.trim();
  }
}

