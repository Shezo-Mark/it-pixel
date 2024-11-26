import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvacComponent } from './hvac.component';

describe('HvacComponent', () => {
  let component: HvacComponent;
  let fixture: ComponentFixture<HvacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HvacComponent]
    });
    fixture = TestBed.createComponent(HvacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
