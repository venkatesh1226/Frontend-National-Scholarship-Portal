import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelDetComponent } from './twel-det.component';

describe('TwelDetComponent', () => {
  let component: TwelDetComponent;
  let fixture: ComponentFixture<TwelDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
