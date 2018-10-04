import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecciarossaComponent } from './frecciarossa.component';

describe('FrecciarossaComponent', () => {
  let component: FrecciarossaComponent;
  let fixture: ComponentFixture<FrecciarossaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrecciarossaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrecciarossaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
