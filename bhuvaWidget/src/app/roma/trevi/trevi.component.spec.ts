import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreviComponent } from './trevi.component';

describe('TreviComponent', () => {
  let component: TreviComponent;
  let fixture: ComponentFixture<TreviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
