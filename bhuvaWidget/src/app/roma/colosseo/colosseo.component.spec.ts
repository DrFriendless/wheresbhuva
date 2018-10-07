import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColosseoComponent } from './colosseo.component';

describe('ColosseoComponent', () => {
  let component: ColosseoComponent;
  let fixture: ComponentFixture<ColosseoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColosseoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColosseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
