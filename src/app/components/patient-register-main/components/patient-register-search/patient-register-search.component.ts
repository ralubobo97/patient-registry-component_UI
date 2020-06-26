import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EpisodeOfCareService } from 'src/app/services/episode-of-care.service';

@Component({
  selector: 'patient-register-search',
  templateUrl: './patient-register-search.component.html',
  styleUrls: ['./patient-register-search.component.css']
})
export class PatientRegisterSearchComponent implements OnInit {
  @Output() selectedPatient = new EventEmitter();
  @Output() refreshButton = new EventEmitter();

  patientSearchForm;
  multipleSearch;
  department;
  departmentID;
  resetButton: boolean = false;

  departmentOptions = [{ label: 'Selecteaza', value: '' }];

  patientSearchResults;
  loading;
  totalRecords;
  id;
  visible = true;
  message;

  constructor(private eocService: EpisodeOfCareService) { }

  ngOnInit(): void {
    this.eocService.getDepartments().subscribe(departments => {
      for (let index in departments) {
        this.departmentOptions.push({ label: departments[index].department, value: departments[index].id });
      }
    });
  }

  search() {
    if (!this.multipleSearch && this.departmentID) this.multipleSearch = '';
    if (this.multipleSearch && !this.departmentID) this.departmentID = '';
    this.eocService.getLatestEpisodeOfCare(this.multipleSearch, this.departmentID, 0, 10).subscribe(results => {
      if (results.length > 0) {
        this.patientSearchResults = results;
        this.message = '';
      }
      else this.message = 'Nu s-au gasit rezultate.';
    });
    this.eocService.countLatestEpisodeOfCare().subscribe(count => this.totalRecords = count);
  }

  selectPatient(patient) {
    this.selectedPatient.emit(patient);
  }

  async lazyFetch(event) {
    setTimeout(() => {
      this.loading = true;
    }, 1);

    let data = {
      page: event.first / event.rows,
      size: event.rows
    };

    this.eocService.getLatestEpisodeOfCare(this.multipleSearch, this.departmentID, data.page * data.size, data.size).subscribe(res => {
      if (res.length > 0) {
        this.id = res[0]['id'];
        this.totalRecords = res[0]['count'];
        this.patientSearchResults = res;
        this.message = '';
      } else {
        this.message = 'Nu s-au gasit rezultate.';
        this.totalRecords = 0;
        this.patientSearchResults = [];
      }
      setTimeout(() => {
        this.loading = false;
      }, 2);
    });

  }

  refreshTable() {
    this.refreshButton.emit(true);
    this.visible = false;
    this.patientSearchResults = [];
    this.multipleSearch = '';
    this.departmentID = '';
    this.eocService.countLatestEpisodeOfCare().subscribe(count => this.totalRecords = count);
    setTimeout(() => this.visible = true, 500);
  }
}
