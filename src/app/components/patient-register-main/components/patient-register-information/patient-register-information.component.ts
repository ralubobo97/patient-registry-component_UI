import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EpisodeOfCareService } from 'src/app/services/episode-of-care.service';
import { formatDate, DatePipe } from '@angular/common';

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
  patientID;
  selectedEOC: boolean = false;
  tabIndex;
  discard: boolean = false;
  cnpValid = '';

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
    { label: 'M', value: 'M' },
    { label: 'F', value: 'F' }
  ];
  idType;
  idTypeOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Fara acte', value: 'Fara acte' },
    { label: 'CI', value: 'CI' }
  ];
  series; seriesNumber;
  issuedBy; issueDate;
  
  // More patient details Form
  country; county; street;
  countryOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Romania', value: 'Romania' },
    { label: 'Franta', value: 'Franta' },
    { label: 'Marea Britanie', value: 'Marea Britanie' },
    { label: 'Spania', value: 'Spania' },
  ];
  countyOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Sector 1', value: 'Sector 1' },
    { label: 'Sector 2', value: 'Sector 2' },
    { label: 'Sector 3', value: 'Sector 3' },
    { label: 'Sector 4', value: 'Sector 4' },
    { label: 'Sector 5', value: 'Sector 5' },
    { label: 'Sector 6', value: 'Sector 6' },
  ];
  nationality; city; streetNumber; building; apartment;
  cityOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Arad', value: 'Arad' },
    { label: 'Bucuresti', value: 'Bucuresti' },
    { label: 'Cluj', value: 'Cluj' },
    { label: 'Iasi', value: 'Iasi' },
    { label: 'Oradea', value: 'Oradea' },
  ];
  insuranceStatus; insuranceType; familyDoctor;
  insuranceStatusOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Da', value: 'Yes' },
    { label: 'Nu', value: 'No' }
  ];
  insuranceTypeOptions = [                    /////// ???????
    { label: 'Selecteaza', value: '' }
  ];
  card; cardType; cardNumber;
  cardOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Da', value: 'Yes' },
    { label: 'Nu', value: 'No' }
  ];
  cardTypeOptions = [                         /////// ???????
    { label: 'Selecteaza', value: '' }
  ];

  // Medical Data Form
  bloodType; rh;
  bloodTypeOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'A', value: 'A' },
    { label: 'B', value: 'B' },
    { label: 'AB', value: 'AB' },
    { label: 'O', value: 'O' },
  ];
  rhOptions = [
    { label: 'Selecteaza', value: '' },
    { label: 'Pozitiv', value: 'Positive' },
    { label: 'Negativ', value: 'Negative' },
  ];
  ahc; observations; allergies; contraindications; lifestyle;

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
      this.episodesOfCareTab = true;
      this.tabIndex = 0;
    }
    
    if(!this.selectedEOC){
      this.eocDate = new Date();
    }

    if(this.selectedPatientCNP != ''){
      this.eocService.getPatientByCNP(this.selectedPatientCNP).subscribe(patient => {
        this.patientID = patient.patientID;
        this.firstname = patient.firstname;
        this.lastname = patient.lastname;
        this.cnp = patient.cnp;
        this.cid = patient.cid;
        this.birthdate = patient.birthdate;
        this.birthWeight = patient.birthWeight;
        this.gender = patient.gender;
        this.idType = patient.idType;
        this.series = patient.series;
        this.seriesNumber = patient.seriesNumber;
        this.issuedBy = patient.issuedBy;
        this.issueDate = patient.issueDate;
      })
    }
  }

  selectEpisodeOfCare(episodeOfCare) {
    this.selectedEOC = true;
    this.tabIndex = 3;
    this.newEpisodeOfCareTab = true;
    this.newPatientTab = false;
    this.unknownPatientTab = false;
    this.episodesOfCareTab = false;

    this.eocCode = episodeOfCare.eocCode;
    this.eocDate = episodeOfCare.eocDate;
    this.departmentID = episodeOfCare.departmentID;

    this.eocService.getPatientInformationByEOCCode(this.eocCode).subscribe(info => {
      this.country = info[0].country;
      this.county = info[0].county;
      this.city = info[0].city;
      this.nationality = info[0].nationality;
      this.street = info[0].street;
      this.streetNumber = info[0].streetNumber;
      this.building = info[0].building;
      this.apartment = info[0].apartment;
      this.insuranceStatus = info[0].insuranceStatus;
      this.insuranceType = info[0].insuranceType;
      this.familyDoctor = info[0].familyDoctor;
      this.card = info[0].card;
      this.cardType = info[0].cardType;
      this.cardNumber = info[0].cardNumber;
      this.bloodType = info[0].bloodType;
      this.rh = info[0].rh;
      this.ahc = info[0].ahc;
      this.observations = info[0].observations;
      this.allergies = info[0].allergies;
      this.contraindications = info[0].contraindications;
      this.lifestyle = info[0].lifestyle;
    });
  }

  resetForms(episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm, newPatientEOCForm, newPatientForm, newPatientDetailsForm, newPatientMedicalDataForm){
    episodeOfCareForm.reset();
    patientForm.reset();
    patientDetailsForm.reset();
    medicalDataForm.reset();
    newPatientEOCForm.reset();
    newPatientForm.reset();
    newPatientDetailsForm.reset();
    newPatientMedicalDataForm.reset();
  }

  handleChange(event, episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm, newPatientEOCForm, newPatientForm, newPatientDetailsForm, newPatientMedicalDataForm){
    this.tabIndex = event.index;
    this.resetForms(episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm, newPatientEOCForm, newPatientForm, newPatientDetailsForm, newPatientMedicalDataForm);

    if(this.tabIndex == 0) this.episodesOfCareTab = true;
    else if(this.tabIndex == 1) this.unknownPatientTab = true;

    else if(this.tabIndex == 2) {   // PACIENT NOU
      this.newPatientTab = true;
      this.eocService.getLastRegisteredEOC().subscribe(eoc => {
        this.eocCode = Number(eoc[0].code + 1);
      });
      this.eocDate = new Date();

    } else if(this.tabIndex == 3) { // PREZENTARE NOUA
      this.newEpisodeOfCareTab = true;
      this.eocService.getLastRegisteredEOC().subscribe(eoc => {
        this.eocCode = Number(eoc[0].code + 1);
      });
      this.eocDate = new Date();

      if(this.selectedPatientCNP != ''){
        this.eocService.getPatientByCNP(this.selectedPatientCNP).subscribe(patient => {
          this.patientID = patient.patientID;
          this.firstname = patient.firstname;
          this.lastname = patient.lastname;
          this.cnp = patient.cnp;
          this.cid = patient.cid;
          this.birthdate = patient.birthdate;
          this.birthWeight = patient.birthWeight;
          this.gender = patient.gender;
          this.idType = patient.idType;
          this.series = patient.series;
          this.seriesNumber = patient.seriesNumber;
          this.issuedBy = patient.issuedBy;
          this.issueDate = patient.issueDate;
        })
      }
    }
  }

  discardChanges(){
    this.newEpisodeOfCareTab = false;
    this.newPatientTab = false;
    this.unknownPatientTab = false;
    this.episodesOfCareTab = true;
    this.tabIndex = 0;
    this.selectedEOC = false;
  }

  saveChanges(episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm, newPatientEOCForm, newPatientForm, newPatientDetailsForm, newPatientMedicalDataForm){
    if(this.selectedEOC){
      let body = { episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm  };
      this.eocService.updateEpisodeOfCare(body).subscribe(res => {
        this.newEpisodeOfCareTab = false;
        this.newPatientTab = false;
        this.unknownPatientTab = false;
        this.episodesOfCareTab = true;
        this.tabIndex = 0;
        this.selectedEOC = false;
      });
    } else {
      let body = { patientID: this.patientID , episodeOfCareForm, patientForm, patientDetailsForm, medicalDataForm  };
      this.eocService.saveNewEpisodeOfCare(body).subscribe(res => {
        this.newEpisodeOfCareTab = false;
        this.newPatientTab = false;
        this.unknownPatientTab = false;
        this.episodesOfCareTab = true;
        this.tabIndex = 0;
        this.selectedEOC = false;

        this.episodesOfCare.push({
          eocCode: episodeOfCareForm.eocCode,
          eocDate: episodeOfCareForm.eocDate,
          department: this.departmentOptions.find(option => option.value == episodeOfCareForm.departmentID).label,
          departmentID: episodeOfCareForm.departmentID
        })
      });
    }
  }
  
  checkCNP(cnp) {
    return cnp.length === 13 && cnp.substr(0, 1) !== '0' && Number(cnp);
  }

  validateCNP(){
   if(!this.checkCNP(this.cnp)){
     this.cnpValid = 'invalidCNP';
   } else {
    this.cnpValid = '';
   }
  }
}
