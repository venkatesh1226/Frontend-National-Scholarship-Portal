import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDetComponent } from './fee-det.component';

describe('FeeDetComponent', () => {
  let component: FeeDetComponent;
  let fixture: ComponentFixture<FeeDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
