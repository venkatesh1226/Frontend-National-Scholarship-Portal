import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAppliedComponent } from './student-applied.component';

describe('StudentAppliedComponent', () => {
  let component: StudentAppliedComponent;
  let fixture: ComponentFixture<StudentAppliedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAppliedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
