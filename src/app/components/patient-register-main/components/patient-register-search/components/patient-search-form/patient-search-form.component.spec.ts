import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchFormComponent } from './patient-search-form.component';

describe('PatientSearchFormComponent', () => {
  let component: PatientSearchFormComponent;
  let fixture: ComponentFixture<PatientSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
