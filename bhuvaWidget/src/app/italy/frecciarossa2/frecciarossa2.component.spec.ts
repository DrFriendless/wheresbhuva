import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Frecciarossa2Component } from './frecciarossa2.component';

describe('Frecciarossa2Component', () => {
  let component: Frecciarossa2Component;
  let fixture: ComponentFixture<Frecciarossa2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Frecciarossa2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Frecciarossa2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
