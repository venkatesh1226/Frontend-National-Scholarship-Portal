import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescriptionComponent } from './components/description/description.component';
import { ScholarshipApprovalComponent } from './components/scholarship-approval/scholarship-approval.component';
import { InstituteHomeComponent } from './components/institute-home/institute-home.component';
import { InstitutionloginComponent } from './components/institutionlogin/institutionlogin.component';
import { NodalofficerloginComponent } from './components/nodalofficerlogin/nodalofficerlogin.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';

const routes: Routes = [
 
  { path: 'about-us', component: DescriptionComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'home', component: BodyComponent },
  { path: 'approval', component: ScholarshipApprovalComponent },
  {path:'studentlogin', component:StudentloginComponent},
  {path:'nodalofficerlogin', component:NodalofficerloginComponent},
  {path:'institutionlogin',component:InstitutionloginComponent},
  {path:'institute-home',component:InstituteHomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
