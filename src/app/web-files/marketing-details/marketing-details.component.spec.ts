import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingDetailsComponent } from './marketing-details.component';

describe('MarketingDetailsComponent', () => {
  let component: MarketingDetailsComponent;
  let fixture: ComponentFixture<MarketingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarketingDetailsComponent]
    });
    fixture = TestBed.createComponent(MarketingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
