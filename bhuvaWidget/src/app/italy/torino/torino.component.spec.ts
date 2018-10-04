import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorinoComponent } from './torino.component';

describe('TorinoComponent', () => {
  let component: TorinoComponent;
  let fixture: ComponentFixture<TorinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
