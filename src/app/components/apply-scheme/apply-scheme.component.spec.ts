import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplySchemeComponent } from './apply-scheme.component';

describe('ApplySchemeComponent', () => {
  let component: ApplySchemeComponent;
  let fixture: ComponentFixture<ApplySchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplySchemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplySchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
