import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WooCommerceComponent } from './woo-commerce.component';

describe('WooCommerceComponent', () => {
  let component: WooCommerceComponent;
  let fixture: ComponentFixture<WooCommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WooCommerceComponent]
    });
    fixture = TestBed.createComponent(WooCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
