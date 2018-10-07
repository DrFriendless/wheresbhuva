import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastelComponent } from './castel.component';

describe('CastelComponent', () => {
  let component: CastelComponent;
  let fixture: ComponentFixture<CastelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
