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
import {HttpClientModule} from '@angular/common/http'
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
    ViewScholarshipComponent
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ViewScholarshipComponent,ScholarshipApprovalComponent]
})
export class AppModule { }
