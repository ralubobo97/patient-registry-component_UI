import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EpisodeOfCareService } from 'src/app/services/episode-of-care.service';

@Component({
  selector: 'patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  @Output() searchResults = new EventEmitter();

  patientSearchForm;
  multipleSearch;
  department;
  departmentID;
  fromDate;
  toDate;

  departmentOptions = [{ label: 'Selecteaza', value: '' }];

  constructor(private eocService: EpisodeOfCareService) { }

  ngOnInit(): void {
    this.eocService.getDepartments().subscribe(departments => {
      for(let index in departments){
        this.departmentOptions.push({ label: departments[index].department, value: departments[index].id });
      }
    });
  }

  search(){
    if(!this.multipleSearch && this.departmentID) this.multipleSearch = '';
    if(this.multipleSearch && !this.departmentID) this.departmentID = '';
    this.eocService.getLatestEpisodeOfCare(this.multipleSearch, this.departmentID).subscribe(res => {
      console.log(res);
      this.searchResults.emit(res);
    })
  }
}
