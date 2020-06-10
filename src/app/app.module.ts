import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { PatientRegisterMainComponent } from './components/patient-register-main/patient-register-main.component';
import { PatientRegisterSearchComponent } from './components/patient-register-main/components/patient-register-search/patient-register-search.component';
import { PatientRegisterInformationComponent } from './components/patient-register-main/components/patient-register-information/patient-register-information.component';
import { PatientSearchComponent } from './components/patient-register-main/components/patient-register-search/components/patient-search/patient-search.component';
import { PatientSearchFormComponent } from './components/patient-register-main/components/patient-register-search/components/patient-search-form/patient-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterMainComponent,
    PatientRegisterSearchComponent,
    PatientRegisterInformationComponent,
    PatientSearchComponent,
    PatientSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    TableModule,
    InputTextModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
