import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'firstAngularProject';
  public isLoginIn = false;

  constructor(private cookieService: CookieService, private ds: DataService) {}

  getCookie() {
    let auth = this.cookieService.get('login');
    if (auth === 'true') {
      this.isLoginIn = true;
    } else {
      this.isLoginIn = false;
    }

    this.ds.sendData(this.isLoginIn);

    setTimeout(() => {
      this.getCookie();
    }, 60000);
  }
  ngOnInit(): void {
    this.getCookie();
  }
}
