import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidSearchComponent } from './paid-search.component';

describe('PaidSearchComponent', () => {
  let component: PaidSearchComponent;
  let fixture: ComponentFixture<PaidSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaidSearchComponent]
    });
    fixture = TestBed.createComponent(PaidSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
