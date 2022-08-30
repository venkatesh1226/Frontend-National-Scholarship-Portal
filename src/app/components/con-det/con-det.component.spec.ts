import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConDetComponent } from './con-det.component';

describe('ConDetComponent', () => {
  let component: ConDetComponent;
  let fixture: ComponentFixture<ConDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
