import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ViewScholarshipComponent,ScholarshipApprovalComponent]
})
export class AppModule { }
