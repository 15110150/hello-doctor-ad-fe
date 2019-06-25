import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/oauth/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../model/account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  account;

  constructor(private route: ActivatedRoute, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.account = new Account();
  }

  login() {
    this.authenticationService.login(this.account)
    .subscribe(data => {
      if (data != null) {
        this.router.navigateByUrl('/menu');
      }
    },
      error => {
        if (error.status == 404) {
          alert("Tài khoản không tồn tại")
        }
        else
        alert("Tài khoản không tồn tại")
      });
  }
}
