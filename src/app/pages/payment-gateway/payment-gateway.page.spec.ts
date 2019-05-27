import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentGatewayPage } from './payment-gateway.page';

describe('PaymentGatewayPage', () => {
  let component: PaymentGatewayPage;
  let fixture: ComponentFixture<PaymentGatewayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentGatewayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentGatewayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
