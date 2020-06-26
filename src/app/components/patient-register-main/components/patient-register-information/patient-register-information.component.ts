import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EpisodeOfCareService } from 'src/app/services/episode-of-care.service';

@Component({
  selector: 'patient-register-information',
  templateUrl: './patient-register-information.component.html',
  styleUrls: ['./patient-register-information.component.css']
})
export class PatientRegisterInformationComponent implements OnInit, OnChanges {
  @Input('sendSelectedPatient') selectedPatient;
  @Input('refreshTableButton') refreshButton;
  
  episodesOfCare;
  message;
  selectedPatientCNP;
  selectedEOC: boolean = false;
  tabIndex;

  // Episode Of Care Form
  eocCode; 
  departmentID;
  departmentOptions = [{ label: 'Selecteaza', value: '' }];
  eocDate;

  // Tabs
  episodesOfCareTab;
  unknownPatientTab;
  newPatientTab;
  newEpisodeOfCareTab;

  // Personal Details Form
  lastname;
  firstname;
  birthdate; birthWeight;
  cnp; cid; age; gender;
  genderOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'M', value: 'male' },
    { label: 'F', value: 'female' }
  ];
  idType;
  idTypeOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Fara acte', value: '' },
    { label: 'CI', value: 'CI' }
  ];
  series; seriesNumber;
  issuedBy; issueDate;
  

  constructor(private eocService: EpisodeOfCareService) { }

  ngOnInit(): void {
    this.newEpisodeOfCareTab = false;
    this.newPatientTab = false;
    this.unknownPatientTab = false;
    this.episodesOfCareTab = true;

    this.eocService.getDepartments().subscribe(departments => {
      for (let index in departments) {
        this.departmentOptions.push({ label: departments[index].department, value: departments[index].id });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    let reset = changes.refreshButton && changes.refreshButton.currentValue ? changes.refreshButton.currentValue : false;
    this.selectedPatientCNP = changes.selectedPatient && changes.selectedPatient.currentValue ? changes.selectedPatient.currentValue.cnp : '';
    if(this.selectedPatientCNP != '' && reset == false){
      this.eocService.getEpisodesOfCareByPatientCNP(this.selectedPatientCNP).subscribe(results => this.episodesOfCare = results);
      this.message = '';
    } else {
      this.episodesOfCare = [];
      this.message = 'Selectati un pacient pentru a putea vedea lista cu prezentari.';
    }
    
  }

  selectEpisodeOfCare(episodeOfCare) {
    this.selectedEOC = true;
    this.newEpisodeOfCareTab = true;
    this.newPatientTab = false;
    this.unknownPatientTab = false;
    this.episodesOfCareTab = false;

    this.eocCode = episodeOfCare.eocCode;
    this.eocDate = episodeOfCare.eocDate;
    this.departmentID = episodeOfCare.departmentID;

    this.eocService.getPatientInformationByEOCCode(this.eocCode).subscribe(info => {
      this.firstname = info[0].firstname;
      this.lastname = info[0].lastname;
      this.birthdate = info[0].birthdate;
      this.gender = info[0].gender;
      this.birthWeight = info[0].birthWeight;
      this.idType = info[0].idType;
      this.series = info[0].series;
      this.seriesNumber = info[0].seriesNumber;
      this.issuedBy = info[0].issuedBy;
      this.issueDate = info[0].issueDate;
      this.cnp = this.selectedPatientCNP;
      this.cid = info[0].cid;
    });
  }

  handleChange(event){
    this.tabIndex = event.index;
  }

  discardChanges(){

  }

  saveChanges(episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm){
    console.log('EOC', episodeOfCareForm);
    console.log('DETAILS', patientForm);

    let body = { episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm  };
    this.eocService.updateEpisodeOfCare(body).subscribe(res => {
      console.log(res);
    });
  }
}
