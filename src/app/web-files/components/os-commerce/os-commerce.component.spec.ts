import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsCommerceComponent } from './os-commerce.component';

describe('OsCommerceComponent', () => {
  let component: OsCommerceComponent;
  let fixture: ComponentFixture<OsCommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OsCommerceComponent]
    });
    fixture = TestBed.createComponent(OsCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
