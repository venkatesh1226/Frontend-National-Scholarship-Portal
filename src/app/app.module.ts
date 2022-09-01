import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { DescriptionComponent } from './components/description/description.component';
import { ContactComponent } from './components/contact/contact.component';
import { ScholarshipApprovalComponent } from './components/scholarship-approval/scholarship-approval.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewScholarshipComponent } from './components/view-scholarship/view-scholarship.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StudentloginComponent } from './components/studentlogin/studentlogin.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NodalofficerloginComponent } from './components/nodalofficerlogin/nodalofficerlogin.component';
import { InstitutionloginComponent } from './components/institutionlogin/institutionlogin.component';
import { InstituteHomeComponent } from './components/institute-home/institute-home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http'
import { StdRegComponent } from './components/std-reg/std-reg.component';
import { ApplySchemeComponent } from './components/apply-scheme/apply-scheme.component';
import { BasicDetComponent } from './components/basic-det/basic-det.component';
import { AcadDetComponent } from './components/acad-det/acad-det.component';
import { TenDetComponent } from './components/ten-det/ten-det.component';
import { TwelDetComponent } from './components/twel-det/twel-det.component';
import { FeeDetComponent } from './components/fee-det/fee-det.component';
import { OthDetComponent } from './components/oth-det/oth-det.component';
import { ConDetComponent } from './components/con-det/con-det.component';
import { SubDetComponent } from './components/sub-det/sub-det.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { InstitutionregistrationComponent } from './components/institutionregistration/institutionregistration.component';
import { StudenthomeComponent } from './components/studenthome/studenthome.component';
import { StudentAppliedComponent } from './components/student-applied/student-applied.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    NodalofficerloginComponent,
    InstitutionloginComponent,
    InstituteHomeComponent,
    NavbarComponent,
    BodyComponent,
    DescriptionComponent,
    ContactComponent,
    ScholarshipApprovalComponent,
    ViewScholarshipComponent,
    StdRegComponent,
    ApplySchemeComponent,
    BasicDetComponent,
    AcadDetComponent,
    TenDetComponent,
    TwelDetComponent,
    FeeDetComponent,
    OthDetComponent,
    ConDetComponent,
    SubDetComponent,
    HomeComponent,
    InstitutionregistrationComponent,
    StudenthomeComponent,
    StudentAppliedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ViewScholarshipComponent,ScholarshipApprovalComponent] 
})
export class AppModule { }
