import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public allItems: any;
  constructor() {}
  deleteItem(index: number) {
    this.allItems.splice(index, 1);
    localStorage.setItem('savedCart', JSON.stringify(this.allItems));
    this.allItems = localStorage.getItem('savedCart');
    if (this.allItems) {
      this.allItems = JSON.parse(this.allItems);
    }
  }
  buy() {
    localStorage.setItem('savedCart', '[]');
    this.allItems = [];
    alert('It will be soon near by you!!!!!!!');
  }
  ngOnInit(): void {
    this.allItems = localStorage.getItem('savedCart');
    if (this.allItems) {
      this.allItems = JSON.parse(this.allItems);
    }
  }
}
