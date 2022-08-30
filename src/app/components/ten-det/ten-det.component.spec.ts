import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenDetComponent } from './ten-det.component';

describe('TenDetComponent', () => {
  let component: TenDetComponent;
  let fixture: ComponentFixture<TenDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenDetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
