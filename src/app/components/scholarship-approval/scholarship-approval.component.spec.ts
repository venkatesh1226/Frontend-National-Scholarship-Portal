import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipApprovalComponent } from './scholarship-approval.component';

describe('ScholarshipApprovalComponent', () => {
  let component: ScholarshipApprovalComponent;
  let fixture: ComponentFixture<ScholarshipApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipApprovalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
