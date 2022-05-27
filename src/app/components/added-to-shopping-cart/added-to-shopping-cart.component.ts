import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-added-to-shopping-cart',
  templateUrl: './added-to-shopping-cart.component.html',
  styleUrls: ['./added-to-shopping-cart.component.scss'],
})
export class AddedToShoppingCartComponent implements OnInit {
  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService
  ) {}
  closeModal(modalId?: number) {
    this.modalService.hide(modalId);
  }
  ngOnInit(): void {}
}
