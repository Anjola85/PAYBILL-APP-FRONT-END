import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DstvPage } from './dstv.page';

describe('DstvPage', () => {
  let component: DstvPage;
  let fixture: ComponentFixture<DstvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DstvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DstvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
