import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AddedToShoppingCartComponent } from '../added-to-shopping-cart/added-to-shopping-cart.component';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.scss'],
})
export class ShowMoreComponent implements OnInit {
  title?: string;
  data?: any;
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  public addToShoppingCart(obj: any) {
    const savedData: any = localStorage.getItem('savedCart');
    let myJSON;
    if (savedData) {
      myJSON = JSON.parse(savedData);
    } else {
      myJSON = [];
    }
    myJSON.push(obj);
    myJSON = JSON.stringify(myJSON);
    localStorage.setItem('savedCart', myJSON);
    this.openSignUp();
  }
  openSignUp() {
    this.modalRef = this.modalService.show(AddedToShoppingCartComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }
  ngOnInit(): void {}
}
