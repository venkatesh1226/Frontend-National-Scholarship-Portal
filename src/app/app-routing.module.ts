import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteHomeComponent } from './components/institute-home/institute-home.component';
import { InstitutionloginComponent } from './components/institutionlogin/institutionlogin.component';
import { NodalofficerloginComponent } from './components/nodalofficerlogin/nodalofficerlogin.component';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';

const routes: Routes = [
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
