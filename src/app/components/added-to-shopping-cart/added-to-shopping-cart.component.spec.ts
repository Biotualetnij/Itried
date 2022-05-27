import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToShoppingCartComponent } from './added-to-shopping-cart.component';

describe('AddedToShoppingCartComponent', () => {
  let component: AddedToShoppingCartComponent;
  let fixture: ComponentFixture<AddedToShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedToShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedToShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
