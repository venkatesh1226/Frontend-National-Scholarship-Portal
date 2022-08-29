import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import {HttpClientModule} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [StdRegComponent]
})
export class AppModule { }
