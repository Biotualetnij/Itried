import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
interface user {
  email: string;
  password: string;
}
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public dataBase = {
    email: 'user@admin.ss',
    password: 'qwerty',
  };

  constructor(public bsModalRef: BsModalRef, private http: HttpClient) {}

  loginUser(userData: user) {}

  ngOnInit(): void {
    this.http.get('https://localhost:7201/items').subscribe(
      (data) => console.log('success', data),
      (error) => console.log('oops', error)
    );
  }
}
