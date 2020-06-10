import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterMainComponent } from './patient-register-main.component';

describe('PatientRegisterMainComponent', () => {
  let component: PatientRegisterMainComponent;
  let fixture: ComponentFixture<PatientRegisterMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
