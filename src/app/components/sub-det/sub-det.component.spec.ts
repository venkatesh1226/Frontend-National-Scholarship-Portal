import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetComponent } from './sub-det.component';

describe('SubDetComponent', () => {
  let component: SubDetComponent;
  let fixture: ComponentFixture<SubDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
