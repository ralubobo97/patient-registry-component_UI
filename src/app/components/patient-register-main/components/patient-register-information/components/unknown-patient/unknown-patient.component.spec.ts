import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownPatientComponent } from './unknown-patient.component';

describe('UnknownPatientComponent', () => {
  let component: UnknownPatientComponent;
  let fixture: ComponentFixture<UnknownPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
