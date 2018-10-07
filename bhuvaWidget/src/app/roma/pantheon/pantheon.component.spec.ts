import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantheonComponent } from './pantheon.component';

describe('PantheonComponent', () => {
  let component: PantheonComponent;
  let fixture: ComponentFixture<PantheonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantheonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantheonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
