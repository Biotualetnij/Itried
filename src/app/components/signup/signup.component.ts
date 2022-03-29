import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from 'src/app/dataService';

interface user {
  Email: string;
  Password: string;
  FirstName: string;
  LastName: string;
  State: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isEmailRight = true;
  isPasswordRight = true;
  isNameRight = true;

  constructor(
    public bsModalRef: BsModalRef,
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService,
    private ds: DataService
  ) {}

  signUp(userData: user) {
    userData.State = '';
    const isCheckedUserFields = this.checkFields(userData);

    if (isCheckedUserFields) {
      this.http.post('https://localhost:7201/user/signUp', userData).subscribe(
        (data: any) => {
          if (data.auth) {
            this.bsModalRef.hide();
            let today = new Date();
            today.setMinutes(today.getMinutes() + 1);
            this.cookieService.set('login', 'true', today);
            this.ds.sendData(true);
            this.router.navigate(['']);
          }
        },
        (error) => console.log('oops', error)
      );
    }
  }

  checkPassword(password: string): boolean {
    const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password.length === 0) {
      return false;
    }
    if (password.match(passw)) {
      return true;
    }
    return false;
  }
  checkEmail(email: string): boolean {
    if (email.length === 0) {
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
  checkForNumbAndSimb(field: string): boolean {
    const regex = /^[a-zA-Z ]{2,30}$/;
    if (field.length === 0) {
      return false;
    }
    if (regex.test(field)) {
      return true;
    }
    return false;
  }

  ngOnInit(): void {}

  private checkFields(userData: user) {
    let result = [];

    result.push(this.checkEmail(userData.Email));
    this.isEmailRight = result[0];
    result.push(this.checkPassword(userData.Password));
    this.isPasswordRight = result[1];
    result.push(this.checkForNumbAndSimb(userData.FirstName));
    result.push(this.checkForNumbAndSimb(userData.LastName));
    if (result[3] && result[2]) {
      this.isNameRight = true;
    } else {
      this.isNameRight = false;
    }

    return !result.includes(false);
  }
}
