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
import { AcadDetComponent } from './components/acad-det/acad-det.component';
import { ApplySchemeComponent } from './components/apply-scheme/apply-scheme.component';
import { BasicDetComponent } from './components/basic-det/basic-det.component';
import { ConDetComponent } from './components/con-det/con-det.component';
import { FeeDetComponent } from './components/fee-det/fee-det.component';
import { HomeComponent } from './components/home/home.component';
import { OthDetComponent } from './components/oth-det/oth-det.component';
import { SubDetComponent } from './components/sub-det/sub-det.component';
import { TenDetComponent } from './components/ten-det/ten-det.component';
import { TwelDetComponent } from './components/twel-det/twel-det.component';
import { StudenthomeComponent } from './components/studenthome/studenthome.component';
import { InstitutionregistrationComponent } from './components/institutionregistration/institutionregistration.component';

const routes: Routes = [
 
  { path: 'about-us', component: DescriptionComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'home', component: BodyComponent },
  { path: 'approval', component: ScholarshipApprovalComponent },
  {path:'studentlogin', component:StudentloginComponent},
  {path:'nodalofficerlogin', component:NodalofficerloginComponent},
  {path:'institutionlogin',component:InstitutionloginComponent},
  { path: 'institute-home', component: InstituteHomeComponent },
  {path:'applyscheme',component:ApplySchemeComponent},
  // {path:'applyscheme/basicdetail',component:BasicDetComponent},
  // {path:'applyscheme/acadamicdetail',component:AcadDetComponent},

  // {path:'applyscheme/tenthdetail',component:TenDetComponent},
  // {path:'applyscheme/twelvedetail',component:TwelDetComponent},
  // {path:'applyscheme/acadamicdetail',component:AcadDetComponent},
  // {path:'applyscheme/feedetail',component:FeeDetComponent},
  // {path:'applyscheme/otherdetail',component:OthDetComponent},
  // {path:'applyscheme/contactdetail',component:ConDetComponent},
  // {path:'applyscheme/acadamicdetail',component:AcadDetComponent},
  // {path:'applyscheme/submitdetail',component:SubDetComponent},
  { path: 'student-register', component: HomeComponent },
  { path: 'student-home', component: StudenthomeComponent },
  {path:'institute-register',component:InstitutionregistrationComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

