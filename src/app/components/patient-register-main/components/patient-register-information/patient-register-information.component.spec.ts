import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterInformationComponent } from './patient-register-information.component';

describe('PatientRegisterInformationComponent', () => {
  let component: PatientRegisterInformationComponent;
  let fixture: ComponentFixture<PatientRegisterInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
