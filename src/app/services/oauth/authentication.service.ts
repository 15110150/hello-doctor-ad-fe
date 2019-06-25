import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Account } from 'src/app/model/account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  header: HttpHeaders;
  private urlLogin = `${environment.apiUrlApi}/auth2/login`;
  private jwtHeader = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.header = new HttpHeaders()
      .set('Content-Type', 'application/json; charset=utf-8');
  }

  login(account: Account): Observable<Account> {
    return this.http.post<Account>(this.urlLogin, JSON.stringify(account), {
      headers: this.header
    })
      .pipe(
        map(response => {
          const data = response;
          localStorage.setItem('currentAdmin', JSON.stringify(data));
          console.log(localStorage.getItem('currentAdmin'));
          return data;
        }));
  }

  register(account: any): Observable<any> {
    let urlRegis = "http://35.240.201.202:8080/api/account/user/register"
    account.id = 0;
    return this.http.post<any>(urlRegis, JSON.stringify(account), {
      headers: this.header
    })
      .pipe(
        map(response => {
          const data = response;
          return data;
        }));
  }


  checkToken() {
    return this.jwtHeader.isTokenExpired(localStorage.getItem('currentAdmin'));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentAdmin');
    localStorage.removeItem('currentDevice');
  }

}
