import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeOfCareService {

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  options = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get('/api/episodeOfCare/getDepartments');
  }

  getLatestEpisodeOfCare(searchQuery, departmentID, offset, limit) {
    let params = new HttpParams()
    .set('searchQuery', searchQuery)
    .set('departmentID', departmentID)
    .set('offset', offset)
    .set('limit', limit);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/episodeOfCare/getLatestEpisodeOfCare', options);
  }

  countLatestEpisodeOfCare() {
    return this.http.get('/api/episodeOfCare/countLatestEpisodeOfCare');
  }

  getEpisodesOfCareByPatientCNP(patientCNP) {
    let params = new HttpParams().set('patientCNP', patientCNP);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/episodeOfCare/getEpisodesOfCareByPatientCNP', options);
  }

  getPatientInformationByEOCCode(eocCode) {
    let params = new HttpParams().set('eocCode', eocCode);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/episodeOfCare/getPatientInformationByEOCCode', options);
  }

  updateEpisodeOfCare(body) {
    return this.http.post('/api/episodeOfCare/updateEpisodeOfCare', body, this.options);
  }
}
