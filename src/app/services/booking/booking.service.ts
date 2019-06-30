import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListBooking } from 'src/app/model/list-booking';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Page } from 'src/app/model/page';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private urlBooking = `${environment.apiUrlApi}/admin/booking`;
 
  constructor(private http: HttpClient) {
  }

 
  getListBooking(status: string, keyword: string): Observable<Page<ListBooking>> {
    let accessToken = JSON.parse(localStorage.getItem('currentAdmin'));
    let header = new HttpHeaders()
      .set('Authorization', 'Bearer ' + accessToken.token);
    let url = this.urlBooking;
    url = url + '/list?status=' + status + '&keyword=' + keyword ;
    return this.http.get<Page<ListBooking>>(url, {
      headers: header
    }).pipe(
      map(response => {
        const data = response;
        return data;
      }));
  }

}
