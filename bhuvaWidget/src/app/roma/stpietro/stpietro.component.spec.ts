import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StpietroComponent } from './stpietro.component';

describe('StpietroComponent', () => {
  let component: StpietroComponent;
  let fixture: ComponentFixture<StpietroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StpietroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StpietroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
