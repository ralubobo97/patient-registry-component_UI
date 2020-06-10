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

  getDepartments(){
    return this.http.get('/api/episodeOfCare/getDepartments');
  }

  getLatestEpisodeOfCare(searchQuery, departmentID){
    let params = new HttpParams().set('searchQuery', searchQuery).set('departmentID', departmentID);
    let options = { headers: this.headers, params };
    return this.http.get<any>('/api/episodeOfCare/getLatestEpisodeOfCare', options);
  }

}
