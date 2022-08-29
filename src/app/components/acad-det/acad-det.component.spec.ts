import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadDetComponent } from './acad-det.component';

describe('AcadDetComponent', () => {
  let component: AcadDetComponent;
  let fixture: ComponentFixture<AcadDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcadDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcadDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
