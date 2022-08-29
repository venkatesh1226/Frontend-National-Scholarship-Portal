import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'applyscheme/basicdetail',component:BasicDetComponent},
  {path:'applyscheme/acadamicdetail',component:AcadDetComponent},
  {path:'applyscheme',component:ApplySchemeComponent},
  {path:'applyscheme/tenthdetail',component:TenDetComponent},
  {path:'applyscheme/twelvedetail',component:TwelDetComponent},
  {path:'applyscheme/acadamicdetail',component:AcadDetComponent},
  {path:'applyscheme/feedetail',component:FeeDetComponent},
  {path:'applyscheme/otherdetail',component:OthDetComponent},
  {path:'applyscheme/contactdetail',component:ConDetComponent},
  {path:'applyscheme/acadamicdetail',component:AcadDetComponent},
  {path:'applyscheme/submitdetail',component:SubDetComponent},
  {path:'',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
