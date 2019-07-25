import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiftTopupPage } from './swift-topup.page';

describe('SwiftTopupPage', () => {
  let component: SwiftTopupPage;
  let fixture: ComponentFixture<SwiftTopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiftTopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiftTopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
