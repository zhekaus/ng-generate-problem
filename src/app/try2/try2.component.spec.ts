/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Try2Component } from './try2.component';

describe('Try2Component', () => {
  let component: Try2Component;
  let fixture: ComponentFixture<Try2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Try2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Try2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
