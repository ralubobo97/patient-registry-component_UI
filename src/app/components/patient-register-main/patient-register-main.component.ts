import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-patient-register-main',
  templateUrl: './patient-register-main.component.html',
  styleUrls: ['./patient-register-main.component.css']
})
export class PatientRegisterMainComponent implements OnInit {
  currentSelectedPatient;
  refreshTable;

  constructor() { }

  ngOnInit(): void {
  }

  getSelectedPatient(event) {
    this.currentSelectedPatient = event;
  }

  checkIfTableIsRefreshed(event) {
    this.refreshTable = event;
  }
}
