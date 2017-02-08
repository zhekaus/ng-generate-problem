/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Try1Component } from './try1.component';

describe('Try1Component', () => {
  let component: Try1Component;
  let fixture: ComponentFixture<Try1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Try1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Try1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
