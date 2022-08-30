import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthDetComponent } from './oth-det.component';

describe('OthDetComponent', () => {
  let component: OthDetComponent;
  let fixture: ComponentFixture<OthDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
