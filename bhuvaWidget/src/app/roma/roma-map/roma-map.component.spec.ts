import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaMapComponent } from './roma-map.component';

describe('RomaMapComponent', () => {
  let component: RomaMapComponent;
  let fixture: ComponentFixture<RomaMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomaMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
