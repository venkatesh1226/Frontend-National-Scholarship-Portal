import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodalofficerloginComponent } from './nodalofficerlogin.component';

describe('NodalofficerloginComponent', () => {
  let component: NodalofficerloginComponent;
  let fixture: ComponentFixture<NodalofficerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodalofficerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodalofficerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
