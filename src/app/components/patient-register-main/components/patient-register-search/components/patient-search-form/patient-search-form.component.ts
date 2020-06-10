import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-search-form',
  templateUrl: './patient-search-form.component.html',
  styleUrls: ['./patient-search-form.component.css']
})
export class PatientSearchFormComponent implements OnInit {
  @Input('results') patientSearchResults;
  
  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
