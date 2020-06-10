import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientRegisterMainComponent } from './components/patient-register-main/patient-register-main.component';


const routes: Routes = [
  { path: '', component: PatientRegisterMainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
