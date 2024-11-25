import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCommerceComponent } from './big-commerce.component';

describe('BigCommerceComponent', () => {
  let component: BigCommerceComponent;
  let fixture: ComponentFixture<BigCommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigCommerceComponent]
    });
    fixture = TestBed.createComponent(BigCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
