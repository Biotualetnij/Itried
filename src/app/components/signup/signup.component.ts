import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
interface user {
  email: string;
  password: string;
  name: string;
  surename: string;
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

  constructor(public bsModalRef: BsModalRef) {}

  signUp(userData: user) {
    const isCheckedUserFields = this.checkFields(userData);

    if (isCheckedUserFields) {
      console.log('you are signUped');
    } else {
      console.log('you cannot signUped');
    }
  }

  checkPassword(password: string): boolean {
    const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    if (password.length === 0) {
      this.isPasswordRight = false;
      return false;
    }
    if (password.match(passw)) {
      this.isPasswordRight = true;
      return true;
    } else {
      this.isPasswordRight = false;
      return false;
    }
  }
  checkEmail(email: string): boolean {
    if (email.length === 0) {
      this.isEmailRight = false;
      return false;
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      this.isEmailRight = true;
      return true;
    }
    this.isEmailRight = false;
    return false;
  }
  checkForNumbAndSimb(field: string): boolean {
    const regex = /^[a-zA-Z ]{2,30}$/;
    if (field.length === 0) {
      this.isNameRight = false;
      return false;
    }
    if (regex.test(field)) {
      this.isNameRight = true;
      return true;
    }
    this.isNameRight = false;
    return false;
  }

  ngOnInit(): void {}

  private checkFields(userData: user) {
    let result = [];

    result.push(this.checkEmail(userData.email));
    result.push(this.checkPassword(userData.password));
    result.push(this.checkForNumbAndSimb(userData.name));
    result.push(this.checkForNumbAndSimb(userData.surename));

    return !result.includes(false);
  }
}
