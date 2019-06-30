import { Injectable } from '@angular/core';
import { Patient } from 'src/app/model/patient';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Page } from 'src/app/model/page';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = `${environment.apiUrlApi}/admin`;

  constructor(private http: HttpClient) {
  }


  getListPatient(keyword: string): Observable<Page<Patient>> {
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken.token);
    let urlPatient = this.url;
    urlPatient = urlPatient + '/patient/list?keyword=' + keyword;
    return this.http.get<Page<Patient>>(urlPatient, {
      headers: header
    }).pipe(
      map(response => {
        const data = response;
        return data;
      }));
  }
}
