import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'patient-register-search',
  templateUrl: './patient-register-search.component.html',
  styleUrls: ['./patient-register-search.component.css']
})
export class PatientRegisterSearchComponent implements OnInit {
  searchResults;

  constructor() { }

  ngOnInit(): void {
  }

  getSearchResults(event){
    this.searchResults = event;
    
  }
}
