import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/model/doctor';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Page } from 'src/app/model/page';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url = `${environment.apiUrlApi}/admin`;

  constructor(private http: HttpClient) {
  }


  getListDoctor(direction: any, keyword: any, page: number, size: number, sortBy: string): Observable<Page<Doctor>> {
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    const keywordst = keyword === undefined ? '' : keyword;
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken.token);
    let urlDoctor = this.url;
    urlDoctor = urlDoctor + '/doctor/list/active?direction=' + direction + '&keyword=' + keywordst + '&page=' + page + '&size=' + size + '&sortBy=' + sortBy;
    return this.http.get<Page<Doctor>>(urlDoctor, {
      headers: header
    }).pipe(
      map(response => {
        const data = response;
        return data;
      }));
  }

  getDoctor(id: number): Observable<Doctor> {
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken.token);
    let urlDoctor = this.url
    urlDoctor = urlDoctor + "/doctor/" + id;
    return this.http.get<Doctor>(urlDoctor, {
      headers: header
    })
      .pipe(
        map(response => {
          const data = response;
          console.log(data);
          return data;
        }));
  }

  getListDoctorWaiting(direction: any, keyword: any, page: number, size: number, sortBy: string): Observable<Page<Doctor>> {
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    const keywordst = keyword === undefined ? '' : keyword;
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken.token);
    let urlDoctor = this.url;
    urlDoctor = urlDoctor + '/doctor/list/waiting?direction=' + direction + '&keyword=' + keywordst + '&page=' + page + '&size=' + size + '&sortBy=' + sortBy;
    return this.http.get<Page<Doctor>>(urlDoctor, {
      headers: header
    }).pipe(
      map(response => {
        const data = response;
        return data;
      }));
  }


  updateDoctor(doctor: Doctor): Observable<Doctor> {
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    let urlDoctor = this.url
    urlDoctor = urlDoctor + "/doctor/save";
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8')
      .set('Authorization', 'Bearer ' + accessToken.token);
    return this.http.post<Doctor>(urlDoctor, JSON.stringify(doctor), {
      headers: headers
    })
      .pipe(
        map(response => {
          const data = response;
          console.log(data);
          return data;
        }));
  }

 
}
