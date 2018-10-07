import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalatineComponent } from './palatine.component';

describe('PalatineComponent', () => {
  let component: PalatineComponent;
  let fixture: ComponentFixture<PalatineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalatineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalatineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
