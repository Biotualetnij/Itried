import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ShowMoreComponent } from '../show-more/show-more.component';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  public itemsArr: any;
  modalRef?: BsModalRef;
  constructor(private http: HttpClient, private modalService: BsModalService) {}

  openShowMore(data: any) {
    let state: ModalOptions = {
      initialState: {
        data: data,
        title: 'Modal with component',
      },
      class: 'modal-show-more',
    };

    this.modalRef = this.modalService.show(ShowMoreComponent, state);
  }
  ngOnInit(): void {
    this.http.get('https://localhost:7201/items').subscribe(
      (data) => {
        console.log('success', data);
        this.itemsArr = data;
      },
      (error) => console.log('oops', error)
    );
  }
}
