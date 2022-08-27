import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
 
  { path: 'about-us', component: DescriptionComponent },
  { path: 'contact-us', component: ContactComponent },
  {path:'home',component:BodyComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
