import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeniceComponent } from './venice.component';

describe('VeniceComponent', () => {
  let component: VeniceComponent;
  let fixture: ComponentFixture<VeniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
