import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterSearchComponent } from './patient-register-search.component';

describe('PatientRegisterSearchComponent', () => {
  let component: PatientRegisterSearchComponent;
  let fixture: ComponentFixture<PatientRegisterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegisterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegisterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
