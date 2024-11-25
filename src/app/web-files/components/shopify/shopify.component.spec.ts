import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifyComponent } from './shopify.component';

describe('ShopifyComponent', () => {
  let component: ShopifyComponent;
  let fixture: ComponentFixture<ShopifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopifyComponent]
    });
    fixture = TestBed.createComponent(ShopifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
