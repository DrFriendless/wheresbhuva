import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AustraliaMapComponent } from './australia-map.component';

describe('AustraliaMapComponent', () => {
  let component: AustraliaMapComponent;
  let fixture: ComponentFixture<AustraliaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AustraliaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AustraliaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
