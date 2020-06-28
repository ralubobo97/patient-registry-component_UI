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
import { TabViewModule } from 'primeng/tabview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { AppComponent } from './app.component';
import { PatientRegisterMainComponent } from './components/patient-register-main/patient-register-main.component';
import { PatientRegisterSearchComponent } from './components/patient-register-main/components/patient-register-search/patient-register-search.component';
import { PatientRegisterInformationComponent } from './components/patient-register-main/components/patient-register-information/patient-register-information.component';
import { NewPatientComponent } from './components/patient-register-main/components/patient-register-information/components/new-patient/new-patient.component';
import { UnknownPatientComponent } from './components/patient-register-main/components/patient-register-information/components/unknown-patient/unknown-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegisterMainComponent,
    PatientRegisterSearchComponent,
    PatientRegisterInformationComponent,
    NewPatientComponent,
    UnknownPatientComponent
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
    HttpClientModule,
    TabViewModule,
    InputTextareaModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
