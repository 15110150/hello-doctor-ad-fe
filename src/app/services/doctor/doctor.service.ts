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
    const keywordst = keyword === undefined? '': keyword;
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

  getDoctor(id: number): Observable<Doctor>{
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken.token);
    let urlDoctor = this.url
    urlDoctor = urlDoctor + "/doctor/" + id;
    return this.http.get<Doctor>(urlDoctor,{
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
    const keywordst = keyword === undefined? '': keyword;
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


  // updateBooking(booking: Booking): Observable<Booking> {
  //   let accessToken = JSON.parse(localStorage.getItem('currentDoctor'));
  //   let url = this.urlBooking + '/book';
  //   const headers = new HttpHeaders()
  //     .set('Content-Type', 'application/json; charset=utf-8')
  //     .set('Authorization', 'Bearer ' + accessToken.token);
  //   return this.http.post<Booking>(url, JSON.stringify(booking), {
  //     headers: headers
  //   })
  //     .pipe(
  //       map(response => {
  //         const data = response;
  //         console.log(data);
  //         return data;
  //       }));
  // }

  // getDetailBooking(id: any): Observable<ListBooking> {
  //   let accessToken = JSON.parse(localStorage.getItem('currentDoctor'));
  //   let header = new HttpHeaders()
  //     .set('Authorization', 'Bearer ' + accessToken.token);
  //   let url = this.urlBooking;
  //   url = url + '/book/detail/' + id;
  //   return this.http.get<ListBooking>(url, {
  //     headers: header
  //   }).pipe(
  //     map(response => {
  //       const data = response;
  //       return data;
  //     }));
  // }

  // getDetailFeedback(id: any): Observable<Feedback> {
  //   let accessToken = JSON.parse(localStorage.getItem('currentDoctor'));
  //   let url = this.urlBooking + "/comment/detail/" + id;
  //   const headers = new HttpHeaders()
  //     .set('Authorization', 'Bearer ' + accessToken.token);
  //   return this.http.get<Feedback>(url, { headers: headers })
  //     .pipe(
  //       map(response => {
  //         const data = response;
  //         console.log(data);
  //         return data;
  //       }));
  // }

  // getListBooking(status: any): Observable<ListBooking[]> {
  //   let accessToken = JSON.parse(localStorage.getItem('currentDoctor'));
  //   let header = new HttpHeaders()
  //     .set('Authorization', 'Bearer ' + accessToken.token);
  //   let url = this.urlBooking;
  //   url = url + '/book/list?status=' + status;
  //   return this.http.get<any>(url, {
  //     headers: header
  //   }).pipe(
  //     map(response => {
  //       const data = response.content;
  //       return data;
  //     }));
  // }

  // getListBookingAtTime(time: any): Observable<ListBooking[]> {
  //   let accessToken = JSON.parse(localStorage.getItem('currentDoctor'));
  //   let header = new HttpHeaders()
  //     .set('Authorization', 'Bearer ' + accessToken.token);
  //   let url = this.urlBooking;
  //   url = url + '/book/list-booked-at-time?dateTime=' + time;
  //   return this.http.get<any>(url, {
  //     headers: header
  //   }).pipe(
  //     map(response => {
  //       const data = response;
  //       return data;
  //     }));
  // }

  // getListBookingAtPeriod(startTime: string, endTime: string, status: string): Observable<ListBooking[]> {
  //   let accessToken = JSON.parse(localStorage.getItem('currentDoctor'));
  //   let header = new HttpHeaders()
  //     .set('Authorization', 'Bearer ' + accessToken.token);
  //   let url = this.urlBooking;
  //   url = url + '/book/my-list-booking-in-period?endDate=' + endTime + '&startDate=' + startTime + '&status=' + status;
  //   return this.http.get<any>(url, {
  //     headers: header
  //   }).pipe(
  //     map(response => {
  //       const data = response;
  //       return data;
  //     }));
  // }
}
