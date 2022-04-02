import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  public userData: any = this.cookieService.get('userData');
  constructor(private cookieService: CookieService, private http: HttpClient) {}

  ngOnInit(): void {
    this.userData = JSON.parse(this.userData);
  }
  changeProfile(formFields: any) {
    if (this.checkFields(formFields)) {
      let data = this.objectSanitizer(formFields);
      this.http.post('', data).subscribe(
        (data: any) => {},
        (error) => console.log('oops', error)
      );
    }
  }
  objectSanitizer(formFields: any) {
    return {
      FirstName: this.userData.firstName,
      LastName: this.userData.lastName,
      Email: this.userData.email,
      Phone: formFields.phone,
      State: formFields.State,
    };
  }
  checkForLetter(inputtxt: string): boolean {
    return /^[\d]+$/gi.test(inputtxt);
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
  private checkFields(userData: any) {
    let result = [];

    result.push(this.checkForLetter(userData.Phone));
    result.push(this.checkForNumbAndSimb(userData.State));

    return !result.includes(false);
  }
}
