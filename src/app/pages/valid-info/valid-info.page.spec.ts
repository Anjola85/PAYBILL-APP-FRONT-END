import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidInfoPage } from './valid-info.page';

describe('ValidInfoPage', () => {
  let component: ValidInfoPage;
  let fixture: ComponentFixture<ValidInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
